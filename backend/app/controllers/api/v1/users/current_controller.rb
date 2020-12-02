class Api::V1::Users::CurrentController < Api::ApiController
  # 現在のユーザー情報を返す
  def index
    profile = nil
    workspace_member = nil

    workspace_path_id = params[:workspacePathId]
    if workspace_path_id.present?
      workspace = Workspace.find_by(:path_id => workspace_path_id)
      profile = UserProfile.includes(:user).where(:user_id => @current_user.id, :workspace_id => workspace.id).first
      workspace_member = WorkspaceMember.find_by(:member_id => @current_user.id, :workspace_id => workspace.id)
    end

    user = User.find(@current_user.id)

    not_found if workspace_path_id.present? && workspace_member.blank?

    # TODO: Notification作ってから
    notifications = 0
    unread_count = notifications
    is_owner = workspace_member.present? ? workspace_member.owner? : false

    render :template => 'api/v1/users/current/index.json.jb',
           :locals => {
             :user => user,
             :unread_count => unread_count,
             :profile => profile,
             :is_owner => is_owner
           }
  end
end
