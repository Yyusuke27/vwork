class Api::V1::Projects::NewMembersController < Api::ApiController
  def index
    workspace = Workspace.find_by(path_id: params[:workspace_path_id])
    not_found if workspace.blank?

    project_member_ids = ProjectMember.where(:project_id => params[:projectId]).pluck(:member_id)
    workspace_members = WorkspaceMember.includes(:member).where(:workspace_id => workspace.id)
                                       .where.not(:member_id => project_member_ids)

    render :template => 'api/v1/projects/new_members/index.json.jb', :locals => {
      :workspace_members => workspace_members
    }
  end
end
