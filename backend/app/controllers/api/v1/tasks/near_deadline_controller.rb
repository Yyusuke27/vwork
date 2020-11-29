class Api::V1::Tasks::NearDeadlineController < Api::ApiController
  def index
    # 期限が近い(3日以内)タスクを取得
    @tasks = @current_user.tasks.near_deadline

    render :template => 'api/v1/workspaces/tasks/near_deadline.json.jb', :locals => { :tasks => tasks }
  end
end
