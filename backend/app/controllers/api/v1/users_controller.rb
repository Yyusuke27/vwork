class Api::V1::UsersController < Api::ApiController
  # 現在のユーザー情報を返す
  def show
    workspace_id = params[:workspace_id]
    user = User.includes(:user_profiles)
               .where(
                 :id => @current_user.id,
                 :user_profiles => { :workspace_id => workspace_id }
               )
               .first
    # TODO: Notification作ってから
    notifications = 0
    unread_count = notifications
    profile = user.user_profiles.first
    workspace_role = WorkspaceRole.find_by(
      :member_id => @current_user.id,
      :workspace_id => workspace_id
    )
    is_owner = workspace_role.present? ? workspace_role.owner? : false

    render :template => 'api/v1/users/show.json.jb',
           :locals => {
             :user => user,
             :unread_count => unread_count,
             :profile => profile,
             :is_owner => is_owner
           }
  end
end
