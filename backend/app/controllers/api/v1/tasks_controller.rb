class Api::V1::TasksController < Api::ApiController
  def index
    tasks = Task.where(:workspace_id => params[:workspace_id])

    render :template => 'api/v1/tasks/index.json.jb', :locals => { :tasks => tasks }
  end

  def show
    task = Task.find(params[:id])

    render :template => 'api/v1/tasks/show.json.jb', :locals => { :task => task }
  end

  def create
    workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    task = workspace.tasks.new taks_params
    task.save!

    Log.create!(:user_id => @current_user.id, :task_id => task.id, :type => :create, :new_state => 'タスクを作成しました')

    render :template => 'api/v1/tasks/create.json.jb', :locals => { :task => task }
  end

  def update
    task = Task.find(params[:id])
    task.update task_params

    render :template => 'api/v1/tasks/update.json.jb', :locals => { :task => task }
  end

  private

  def taks_params
    params.require(:task).permit(
      :user_id,
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

  def task_member_params
    params.require(:task).permit(:user)
  end
end
