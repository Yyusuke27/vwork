class Api::V1::WorkspacesController < Api::ApiController
  def index
    workspaces = @current_user.workspaces

    render :template => 'api/v1/workspaces/index.json.jb', :locals => { :workspaces => workspaces }
  end

  def show
    # TODO: Workspaceのメンバーのみ閲覧可能
    # Workspaceの詳細情報
  end

  def create
    ActiveRecord::Base.transaction do
      @current_user.name = user_params[:name]
      @current_user.save!

      workspace = @current_user.workspaces.new workspace_params
      workspace.save!
      workspace.members << @current_user

      workspace_role = workspace.workspace_roles.new(:workspace_id => workspace.id, :member_id => @current_user.id, :role => 1)
      workspace_role.save!

      project = workspace.projects.new project_params
      project.save!
      project.members << @current_user

      project_role = project.project_roles.new(:project_id => project.id, :member_id => @current_user.id, :role => 1)
      project_role.save!

      user_profile = workspace.user_profiles.new(:position => user_params[:position], :user_id => @current_user.id)
      user_profile.save!

      if invitation_params.present?
        invitations = invitation_params[:invitations]
        invitations.each do |invitation|
          Workspace.create_invitation(invitation, workspace)
        end
      end

      render :template => 'api/v1/workspaces/create.json.jb', :locals => { :workspace => workspace }
    end
  rescue StandardError => e
    render :json => { :success => false, :error => e.message }
  end

  def update
    workspace = Workspace.find(params[:id])

    not_found if workspace.blank?

    # Workspaceの管理者のみ変更可能
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

  def user_params
    params.require(:user).permit(:name, :position)
  end

  def invitation_params
    params.permit(:invitations => %i[name email])
  end
end
