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
class WorkspaceRole < ApplicationRecord
  belongs_to :workspace
  belongs_to :member, :class_name => 'User'

  enum :role => %i[normal owner]
end
