class Api::V1::Members::TasksController < Api::ApiController
  before_action :check_workspace_owner, :only => [:index]

  def index
    tasks = Task.includes(:user, :project).where(:user_id => params[:member_id])

    render :template => 'api/v1/members/tasks/index.json.jb', :locals => {
      :tasks => tasks
    }
  end
end
