class Api::V1::Projects::MyController < Api::ApiController
  def index
    workspace = Workspace.friendly.find(params[:workspace_path_id])
    projects = @current_user.projects.where(:workspace_id => workspace.id)

    render :template => 'api/v1/projects/my/index.json.jb', :locals => { :projects => projects }
  end
end
