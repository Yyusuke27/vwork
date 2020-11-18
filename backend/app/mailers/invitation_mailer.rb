class InvitationMailer < ApplicationMailer
  def send_invitation(user_id, invitee_user_id, invitation_id)
    mail :to => user.email, :subject => '',
          :template_path => 'mailer/invitation_mailer',
          :template_name => ''
  end
end
