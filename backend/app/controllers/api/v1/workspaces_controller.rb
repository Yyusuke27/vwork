class Api::V1::WorkspacesController < Api::ApiController
  include Common

  def index
    workspaces = @current_user.workspaces

    render template: 'api/v1/workspaces/index.json.jb', locals: { workspaces: workspaces }
  end

  def show
    # TODO: Workspaceのメンバーのみ閲覧可能
    # Workspaceの詳細情報
  end

  def create
    ActiveRecord::Base.transaction do
      workspace = Workspace.new workspace_params
      workspace.workspace_members.new(member_id: @current_user.id, role: 'owner')
      workspace.save!

      project = workspace.projects.new project_params
      project.project_members.new(member_id: @current_user.id, role: 'owner')
      project.save!

      user_profile = @current_user.user_profiles.new user_profile_params.merge(workspace_id: workspace.id)
      user_profile.save!

      if invitation_params.present?
        invitation_params.each do |invitation|
          password = get_random_password

          invitee = User.new(name: invitation.name, email: invitation.email, password: password, password_confirmation: password)
          invitee.save!

          invitation_token = get_token
          invitation_expire_at = get_expired_datetime
          invitation = Invitation.new(user_id: invitee.id, workspace_id: workspace.id, invitation_token: invitation_token, invitation_expire_at: invitation_expire_at)
          invitation.save!

          InvitationWorker.perform_later user.id, invitee.id, invitation.id
        end
      end
      
      render template: 'api/v1/workspaces/create.json.jb', locals: { workspace: workspace }
    end
    rescue => e
      # TODO: エラー処理を追加
      render json: { success: false, error: e.message }
  end

  def update
    workspace = Workspace.find(params[:id])

    not_found if workspace.blank?

    # Workspaceの管理者のみ変更可能
    
  end

  private

  def workspace_params
    params
      .require(:workspace)
      .permit(:name, :active)
  end

  def project_params
    params.require(:project).permit(:name, :description, :icon, :color)
  end

  def user_profile_params
    params.require(:user_profile).permit(:position)
  end

  def invitation_params
    params.permit(invitations: [:name, :email])
  end
end
