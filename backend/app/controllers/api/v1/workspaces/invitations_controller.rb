class Api::V1::Workspaces::InvitationsController < Api::ApiController
  skip_before_action :authenticate_api_v1_user!, :only => [:auth]

  def index
    # 招待者一覧
  end

  def auth
    invitation = Invitation.valid_token
                           .find_by(:invitation_token => invitation_params[:invitationToken])

    if invitation.present?
      workspace = invitation.workspace
      is_registerd = User.exists?(:email => invitation.email)
      render :template => 'api/v1/workspaces/invitations/auth.json.jb', :locals => {
        :invitation => invitation,
        :workspace => workspace,
        :is_registerd => is_registerd
      }
    else
      not_found
    end
  end

  def register_invitee
    workspace = Workspace.find_by(:path_id => invitee_param[:workspacePathId])

    if workspace.present?
      begin
        ActiveRecord::Base.transaction do
          workspace.members << @current_user

          user_profile = workspace.user_profile.new(
            :name => invitee_param[:name],
            :email => invitee_param[:email],
            :user_id => @current_user.id
          )
          user_profile.save!

          workspace_role = workspace.workspace_roles.new(
            :workspace_id => workspace.id,
            :member_id => @current_user.id,
            :role => 0
          )
          workspace_role.save!

          # ユーザーの登録状況を更新
          @current_user.update_registration

          render :template => 'api/v1/workspaces/invitations/register_invitee.json.jb', :locals => { :workspace => workspace }
        end
      rescue StandardError => e
        render :json => { :success => false, :error => e.message }
      end
    else
      not_found
    end
  end

  private

  def invitation_params
    params.require(:invitation).permit(:invitationToken)
  end

  def invitee_param
    params.require(:invitee).permit(:name, :position, :workspacePathId)
  end
end