# == Schema Information
#
# Table name: invitations
#
#  id                   :bigint           not null, primary key
#  discarded_at         :datetime
#  email                :string(255)
#  invitation_expire_at :datetime
#  invitation_token     :string(255)
#  name                 :string(255)
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  workspace_id         :bigint           not null
#
# Indexes
#
#  index_invitations_on_discarded_at  (discarded_at)
#  index_invitations_on_workspace_id  (workspace_id)
#
# Foreign Keys
#
#  fk_rails_...  (workspace_id => workspaces.id)
#
class Invitation < ApplicationRecord
  include Discard::Model

  after_create_commit :send_invitation_mail

  belongs_to :workspace

  default_scope -> { kept }
  scope :valid_token, -> { where('invitations.invitation_expire_at >= ?', Time.current) }

  def self.create_invitation(invitation, workspace)
    random_hex = SecureRandom.hex(16)
    invitation_token = Digest::SHA512.hexdigest(random_hex)

    # トークンの期限を1時間後に設定
    invitation_expire_at = Time.current + 60 * 60
    invitation = Invitation.new(
      :name => invitation[:name],
      :email => invitation[:email],
      :workspace_id => workspace.id,
      :invitation_token => invitation_token,
      :invitation_expire_at => invitation_expire_at
    )
    invitation.save!
  end

  private

  def send_invitation_mail
    InvitationJob.perform_later self
  end
end
