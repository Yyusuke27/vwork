class Api::V1::Workspaces::TasksController < Api::ApiController
  def index
    # workspace_id
    # user_id
    # project_id
  end

  def show
    # task id
    task = Task.find(params[:id])

    # render template
  end

  def create
    # new
    task = Task.new taks_params
    task.save!

    # render template
  end

  def update
    # task id
    task = Task.find(params[:id])
    task.update task_params

    # render template
  end

  def my
    # 自分のタスク
    @tasks = @current_user.tasks

    # render template
  end

  def near_deadline
    # 期限が近い(3日以内)タスクを取得
    @tasks = @current_user.tasks.near_deadline

    # render template
  end

  def recent
    # (1週間以内)updated_atタスクを取得
    @tasks = @current_user.tasks.recent

    # render template
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
      :todays_task,
    )
  end
end
