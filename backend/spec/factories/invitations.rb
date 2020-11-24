# == Schema Information
#
# Table name: invitations
#
#  id                   :bigint           not null, primary key
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
#  index_invitations_on_workspace_id  (workspace_id)
#
# Foreign Keys
#
#  fk_rails_...  (workspace_id => workspaces.id)
#
FactoryBot.define do
  factory :invitation do
    user { nil }
    workspace { nil }
    invitationToken { "MyString" }
    invitationExpire { "2020-09-13 22:01:15" }
  end
end
