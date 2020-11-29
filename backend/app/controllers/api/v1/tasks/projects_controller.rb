class Api::V1::Tasks::ProjectsController < Api::ApiController
  def show
    tasks = Task.where(:project_id => params[:id])

    render :template => 'api/v1/workspaces/tasks/project.json.jb', :locals => { :tasks => tasks }
  end
end
