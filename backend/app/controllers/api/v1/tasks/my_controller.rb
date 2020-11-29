class Api::V1::Tasks::MyController < Api::ApiController
  def index
    @tasks = @current_user.tasks

    render :template => 'api/v1/workspaces/tasks/my.json.jb', :locals => { :tasks => tasks }
  end
end
