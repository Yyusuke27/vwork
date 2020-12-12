class Api::V1::Tasks::RecentController < Api::ApiController
  def index
    not_found if @workspace.blank?

    # (1週間以内)updated_atタスクを取得
    tasks = Task.includes(:user)
                .where(:user_id => @current_user.id, :workspace_id => @workspace.id)
                .recent

    render :template => 'api/v1/tasks/recent/index.json.jb', :locals => { :tasks => tasks }
  end
end
