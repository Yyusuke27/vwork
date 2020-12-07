class Api::V1::TasksController < Api::ApiController
  before_action :set_workspace, :only => [:update]

  def index
    tasks = Task.includes(:user, :project).where(:user_id => @current_user.id)
    todays_tasks = tasks.where(:todays_task => true)
    tasks = tasks.where(:todays_task => false)

    render :template => 'api/v1/tasks/index.json.jb', :locals => { :tasks => tasks, :todays_tasks => todays_tasks }
  end

  def show
    task = Task.includes(:project, :user).find(params[:id])

    render :template => 'api/v1/tasks/show.json.jb', :locals => { :task => task }
  end

  def create
    ActiveRecord::Base.transaction do
      workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
      task = workspace.tasks.new taks_params
      task.save!

      history = History.create!(:task_id => task.id, :history_type => 'log_item')
      history.create_log!(:user_id => @current_user.id, :task_id => task.id, :log_type => 'create_new_task', :new_state => 'タスクを作成しました')

      render :template => 'api/v1/tasks/create.json.jb', :locals => { :task => task }
    end
  rescue StandardError => e
    logger.warn e.message
    render :json => { :success => false }
  end

  def update
    ActiveRecord::Base.transaction do
      task = Task.find(params[:id])
      Log.create_logs(task_log_params, task, @current_user.id) if task_log_params.present?

      task.update! taks_params

      # タスクの担当ユーザーと更新ユーザーが違う場合は通知処理
      if task.user_id != @current_user.id
        Notification.create!(
          :notification_type => 0,
          :user_id => task.user_id,
          :task_id => task.id,
          :workspace_id => @workspace.id,
          :unread => true
        )
      end

      render :template => 'api/v1/tasks/update.json.jb'
    end
  rescue StandardError => e
    logger.warn e.message
    render :json => { :success => false }
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

  def task_log_params
    return nil if params[:log].blank?

    params.require(:log).permit(
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

  def set_workspace
    @workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    not_found if @workspace.blank?
  end
end
