# == Schema Information
#
# Table name: workspace_members
#
#  id           :bigint           not null, primary key
#  role         :integer          default(0)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  member_id    :bigint           not null
#  workspace_id :bigint           not null
#
require 'rails_helper'

RSpec.describe WorkspaceMember, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
