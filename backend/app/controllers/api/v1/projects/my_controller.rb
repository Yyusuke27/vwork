class Api::V1::Projects::MyController < Api::ApiController
  def index
    workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    projects = Project.where(:workspace_id => workspace.id, :user_id => @current_user.id)

    render :template => 'api/v1/projects/my/index.json.jb', :locals => { :projects => projects }
  end
end
