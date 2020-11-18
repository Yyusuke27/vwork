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
FactoryBot.define do
  factory :workspace_role do
    workspace_id { "" }
    member_id { "" }
    role { 1 }
  end
end
