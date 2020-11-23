# == Schema Information
#
# Table name: user_profiles
#
#  id           :bigint           not null, primary key
#  name         :string(255)
#  position     :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :bigint           not null
#  workspace_id :bigint           not null
#
# Indexes
#
#  index_user_profiles_on_user_id                   (user_id)
#  index_user_profiles_on_user_id_and_workspace_id  (user_id,workspace_id) UNIQUE
#  index_user_profiles_on_workspace_id              (workspace_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#  fk_rails_...  (workspace_id => workspaces.id)
#
require 'rails_helper'

RSpec.describe UserProfile, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
