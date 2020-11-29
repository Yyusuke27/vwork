class Api::V1::Tasks::RecentController < Api::ApiController
  def index
    # (1週間以内)updated_atタスクを取得
    @tasks = @current_user.tasks.recent

    render :template => 'api/v1/workspaces/tasks/recent.json.jb', :locals => { :tasks => tasks }
  end
end
