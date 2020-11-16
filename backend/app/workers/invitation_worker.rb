class InvitationWorker
  include Sidekiq::Worker

  def perform(user_id, invitee_user_id, invitation_id)
    InvitationMailer.send_invitation(user_id, invitee_user_id, invitation_id).deliver
  end
end
