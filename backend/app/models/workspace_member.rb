# == Schema Information
#
# Table name: workspace_members
#
#  id           :bigint           not null, primary key
#  role         :integer          default("normal")
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  member_id    :bigint           not null
#  workspace_id :bigint           not null
#
class WorkspaceMember < ApplicationRecord
  after_create :discard_invitation

  belongs_to :workspace
  belongs_to :member, :class_name => 'User'

  enum :role => { :normal => 0, :owner => 1 }

  private

  def discard_invitation
    invitation = Invitation.find_by(:workspace_id => workspace_id, :email => member.email)
    invitation.discard if invitation.present?
  end
end
