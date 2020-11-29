class Api::V1::Workspaces::TasksController < Api::ApiController
  def index
    tasks = Task.where(:workspace_id => params[:workspace_id])

    render :template => 'api/v1/workspaces/tasks/index.json.jb', :locals => { :tasks => tasks }
  end

  def show
    task = Task.find(params[:id])

    render :template => 'api/v1/workspaces/tasks/show.json.jb', :locals => { :task => task }
  end

  def create
    task = Task.new taks_params
    task.save!

    render :template => 'api/v1/workspaces/tasks/create.json.jb', :locals => { :task => task }
  end

  def update
    task = Task.find(params[:id])
    task.update task_params

    render :template => 'api/v1/workspaces/tasks/update.json.jb', :locals => { :task => task }
  end

  private

  def taks_params
    params.require(:task).permit(
      :user_id,
      :workspace_id,
      :project_id,
      :name,
      :description,
      :start_date_at,
      :end_date_at,
      :state,
      :progress,
      :priority,
      :todays_task
    )
  end
end
