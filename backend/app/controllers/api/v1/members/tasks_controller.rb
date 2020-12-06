class Api::V1::Members::TasksController < Api::ApiController
  def index
    tasks = Task.includes(:user, :project).where(:user_id => params[:member_id])
    not_found if tasks.blank?

    render :template => 'api/v1/members/tasks/index.json.jb', :locals => {
      :tasks => tasks
    }
  end
end
