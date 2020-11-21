class InvitationMailer < ApplicationMailer
  def send_invitation(invitation)
    @user = User.find(invitation.user_id)
    @invitation = invitation
    @workspace = Workspace.find(invitation.workspace_id)
    @host = frontend_host

    mail :to => @user.email, :subject => "【VWORK】#{@workspace.name}に招待されました。",
          :template_path => 'mailer/invitation_mailer',
          :template_name => 'send_invitation'
  end
end
