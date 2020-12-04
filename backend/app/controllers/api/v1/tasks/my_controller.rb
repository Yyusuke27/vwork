class Api::V1::Tasks::MyController < Api::ApiController
  def index
    tasks = Task.includes(:user, :project).where(:user_id => @current_user.id)
    todays_tasks = tasks.where(:todays_task => true)
    tasks = tasks.where(:todays_task => false)

    if params[:state].present?
      todays_tasks = todays_tasks.where(:progress => params[:state])
      tasks = tasks.where(:progress => params[:state])
    end

    render :template => 'api/v1/tasks/my/index.json.jb', :locals => { :tasks => tasks, :todays_tasks => todays_tasks }
  end
end
