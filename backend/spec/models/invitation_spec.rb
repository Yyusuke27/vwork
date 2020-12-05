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
require 'rails_helper'

RSpec.describe Invitation, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
