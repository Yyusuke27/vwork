# == Schema Information
#
# Table name: invitations
#
#  id                   :bigint           not null, primary key
#  invitation_expire_at :datetime
#  invitation_token     :string(255)
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  user_id              :bigint           not null
#  workspace_id         :bigint           not null
#
# Indexes
#
#  index_invitations_on_user_id       (user_id)
#  index_invitations_on_workspace_id  (workspace_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#  fk_rails_...  (workspace_id => workspaces.id)
#
class Invitation < ApplicationRecord
  belongs_to :user
  belongs_to :workspace
end
