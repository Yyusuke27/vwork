class Api::V1::WorkspacesController < Api::ApiController
  before_action :check_workspace_owner, :only => [:update]

  def index
    workspaces = @current_user.workspaces

    render :template => 'api/v1/workspaces/index.json.jb', :locals => { :workspaces => workspaces }
  end

  def create
    ActiveRecord::Base.transaction do
      @current_user.update! user_params

      workspace = @current_user.workspaces.create! workspace_params
      workspace.workspace_members.create!(:workspace_id => workspace.id, :member_id => @current_user.id, :role => 1)

      project = workspace.projects.create! project_params
      project.project_members.create!(:project_id => project.id, :member_id => @current_user.id, :role => 1)

      workspace.user_profiles.create! user_profile_params.merge(:user_id => @current_user.id)

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
      member_id = params[:toOwner] || params[:toMember]
      workspace_member = WorkspaceMember.find_by(:member_id => member_id, :workspace_id => @workspace.id)
      not_found if workspace_member.blank?
    end
    workspace_member.update!(:role => 1) if params[:toOwner]

    if params[:toMember]
      workspace_member_roles = WorkspaceMember.where(:workspace_id => @workspace.id).pluck(:role)
      render :json => { :success => false, :error => '管理者は1名以上必要です。' } and return unless workspace_member_roles.count('owner') > 1

      workspace_member.update!(:role => 0)
    end

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
end
