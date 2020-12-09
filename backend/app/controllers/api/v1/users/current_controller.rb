class Api::V1::Users::CurrentController < Api::ApiController
  # 現在のユーザー情報を返す
  def index
    profile = nil
    workspace_member = nil
    all_workspace_member_ids = []
    notifications = []

    workspace_path_id = params[:workspacePathId]
    if workspace_path_id.present?
      workspace = Workspace.includes(:workspace_members).friendly.find(workspace_path_id)
      profile = UserProfile.includes(:user).where(:user_id => @current_user.id, :workspace_id => workspace.id).first
      workspace_member = WorkspaceMember.where(:workspace_id => workspace.id)
      all_workspace_member_ids = workspace_member.where(:role => 1).pluck(:member_id)
      my_workspace_member = workspace_member.where(:member_id => @current_user.id).first
      notifications = Notification.where(:user_id => @current_user, :unread => true, :workspace_id => workspace.id)
    end

    user = User.find(@current_user.id)

    not_found if workspace_path_id.present? && workspace_member.blank?

    unread_count = notifications.length
    is_owner = my_workspace_member.present? ? my_workspace_member.owner? : false

    render :template => 'api/v1/users/current/index.json.jb',
           :locals => {
             :user => user,
             :unread_count => unread_count,
             :profile => profile,
             :is_owner => is_owner,
             :workspace => workspace,
             :all_workspace_member_ids => all_workspace_member_ids
           }
  end
end
