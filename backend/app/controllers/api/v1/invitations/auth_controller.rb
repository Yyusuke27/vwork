class Api::V1::Invitations::AuthController < Api::ApiController
  skip_before_action :authenticate_api_v1_user!, :only => [:show]

  def show
    invitation = Invitation.valid_token
                           .find_by(:invitation_token => params[:invitation_token])
    not_found if invitation.blank?

    workspace = invitation.workspace
    is_registered = User.exists?(:email => invitation.email)

    render :template => 'api/v1/invitations/auth/show.json.jb', :locals => {
      :invitation => invitation,
      :workspace => workspace,
      :is_registered => is_registered
    }
  end

  private

  def invitation_params
    params.require(:invitation).permit(:invitationToken)
  end
end
