class Api::V1::WorkspacesController < Api::ApiController
  before_action :set_workspace, :only => [:update]
  before_action :check_workspace_owner, :only => [:update]

  def index
    workspaces = @current_user.workspaces

    render :template => 'api/v1/workspaces/index.json.jb', :locals => { :workspaces => workspaces }
  end

  def create
    ActiveRecord::Base.transaction do
      @current_user.update! user_params

      workspace = @current_user.workspaces.new workspace_params
      workspace.save!

      workspace_members = workspace.workspace_members.new(:workspace_id => workspace.id, :member_id => @current_user.id, :role => 1)
      workspace_members.save!

      project = workspace.projects.new project_params
      project.save!

      project_members = project.project_members.new(:project_id => project.id, :member_id => @current_user.id, :role => 1)
      project_members.save!

      user_profile = workspace.user_profiles.new user_profile_params.merge(:user_id => @current_user.id)
      user_profile.save!

      if invitation_params.present?
        invitations = invitation_params[:invitations]
        invitations.each do |invitation|
          Invitation.create_invitation(invitation, workspace)
        end
      end

      # ユーザーの登録状況を更新
      @current_user.update_registration

      render :template => 'api/v1/workspaces/create.json.jb', :locals => { :workspace => workspace }
    end
  rescue StandardError => e
    logger.warn e.message
    render :json => { :success => false }
  end

  def update
    @workspace.update!(:name => params[:name]) if params[:name]
    if params[:toOwner] || params[:toMember]
      workspace_member = WorkspaceMember.find_by(:member_id => params[:toOwner], :workspace_id => @workspace.id)
      not_found if workspace_member.blank?
    end
    workspace_member.update!(:role => 1) if params[:toOwner]
    workspace_member.update!(:role => 0) if params[:toMember]

    # Workspaceの管理者のみ変更可能
    render :template => 'api/v1/workspaces/update.json.jb'
  end

  private

  def workspace_params
    params
      .require(:workspace)
      .permit(:name)
  end

  def project_params
    params.require(:project).permit(:name, :description, :icon, :color)
  end

  def user_profile_params
    params.require(:userProfile).permit(:position)
  end

  def user_params
    params.require(:userProfile).permit(:name)
  end

  def invitation_params
    params.permit(:invitations => %i[name email])
  end

  def set_workspace
    @workspace = Workspace.find_by(:path_id => params[:path_id])
    not_found if @workspace.blank?
  end

  def check_workspace_owner
    is_workspace_owner = WorkspaceMember.exists?(
      :workspace_id => @workspace.id,
      :member_id => @current_user.id,
      :role => 1
    )
    unauthorized unless is_workspace_owner
  end
end
