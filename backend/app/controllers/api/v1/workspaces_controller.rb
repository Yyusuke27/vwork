class Api::V1::WorkspacesController < Api::ApiController
  def index
    workspaces = @current_user.workspaces

    render template: 'api/v1/workspaces/index.json.jb', locals: {workspaces: workspaces}
  end

  def create
    # TODO: invite処理を追加
    ActiveRecord::Base.transaction do
      workspace = Workspace.new workspace_params
      workspace.workspace_members.new(member_id: @current_user.id, role: 'owner')
      workspace.save!

      project = workspace.projects.new project_params
      project.project_members.new(member_id: @current_user.id, role: 'owner')
      project.save!

      user_profile = @current_user.user_profiles.new user_profile_params.merge(workspace_id: workspace.id)
      user_profile.save!

      render template: 'api/v1/workspaces/create.json.jb', locals: { workspace: workspace }
    end
    rescue => e
      # TODO: エラー処理を追加
      render json: { success: false, error: e.message }
  end

  private

  def workspace_params
    params
      .require(:workspace)
      .permit(:name, :active)
  end

  def project_params
    params.require(:project).permit(:name, :description, :icon, :color)
  end

  def user_profile_params
    params.require(:user_profile).permit(:position)
  end
end
