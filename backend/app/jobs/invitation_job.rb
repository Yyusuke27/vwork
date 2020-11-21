class InvitationJob < ApplicationJob
  queue_as :default

  def perform(invitation)
    InvitationMailer.send_invitation(invitation).deliver
  end
end
