class Api::V1::InvitationsController < Api::ApiController
  def index
    # 招待者一覧
  end

  def create
    workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    not_found if workspace.blank?

    if invitation_params.present?
      invitations = invitation_params[:invitations]
      invitations.each do |invitation|
        Invitation.create_invitation(invitation, workspace)
      end
    end

    render :template => 'api/v1/invitations/create.json.jb'
  end

  private

  def invitation_params
    params.permit(:invitations => %i[name email])
  end
end
