# == Schema Information
#
# Table name: workspace_roles
#
#  id           :bigint           not null, primary key
#  role         :integer          default("normal")
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  member_id    :bigint           not null
#  workspace_id :bigint           not null
#
# Indexes
#
#  index_workspace_roles_on_workspace_id_and_member_id  (workspace_id,member_id)
#
require 'rails_helper'

RSpec.describe WorkspaceRole, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
