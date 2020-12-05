class Api::V1::CommentsController < Api::ApiController
  def create
    task_id = params[:task_id]

    history = History.create!(:task_id => task_id, :history_type => 'comment_item')
    history.create_comment!(:user_id => @current_user.id, :task_id => task_id, :body => comment_params[:body])

    render :template => 'api/v1/comments/create.json.jb'
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
