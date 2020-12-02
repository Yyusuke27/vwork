class Api::V1::Tasks::RecentController < Api::ApiController
  def index
    workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    not_found if workspace.blank?

    # (1週間以内)updated_atタスクを取得
    workspace_id = workspace.id
    tasks = Task.includes(:user)
                .where(:user_id => @current_user.id, :workspace_id => workspace_id)
                .recent

    render :template => 'api/v1/tasks/recent/index.json.jb', :locals => { :tasks => tasks }
  end
end
