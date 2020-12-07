class Api::V1::Members::WorkspacesController < Api::ApiController
  def set_workspace
    @workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
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
