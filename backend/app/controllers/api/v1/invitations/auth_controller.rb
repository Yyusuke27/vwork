class Api::V1::Invitations::AuthController < Api::ApiController
  skip_before_action :authenticate_api_v1_user!, :only => [:show]

  def show
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

  private

  def invitation_params
    params.require(:invitation).permit(:invitationToken)
  end
end
