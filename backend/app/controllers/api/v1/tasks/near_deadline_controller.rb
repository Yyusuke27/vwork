class Api::V1::Tasks::NearDeadlineController < Api::ApiController
  def index
    workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    not_found if workspace.blank?

    # 期限が近い(3日以内)タスクを取得
    workspace_id = workspace.id
    tasks = Task.includes(:user)
                .where(:user_id => @current_user.id, :workspace_id => workspace_id)
                .near_deadline

    render :template => 'api/v1/tasks/near_deadline/index.json.jb', :locals => { :tasks => tasks }
  end
end
