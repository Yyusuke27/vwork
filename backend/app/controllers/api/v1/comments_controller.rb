class Api::V1::CommentsController < Api::ApiController
  before_action :set_workspace, :only => [:create]

  def create
    task_id = params[:task_id]
    ActiveRecord::Base.transaction do
      history = History.create!(:task_id => task_id, :history_type => 'comment_item')
      history.create_comment!(:user_id => @current_user.id, :task_id => task_id, :body => comment_params[:body])

      # タスクの担当ユーザーとコメントのユーザーが違う場合は通知処理
      if history.task.user_id != @current_user.id
        Notification.create!(
          :notification_type => 1,
          :user_id => history.task.user_id,
          :task_id => task_id,
          :workspace_id => @workspace.id,
          :unread => true
        )
      end

      render :template => 'api/v1/comments/create.json.jb'
    end
  rescue StandardError => e
    logger.warn e.message
    render :json => { :success => false }
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def set_workspace
    @workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    not_found if @workspace.blank?
  end
end
