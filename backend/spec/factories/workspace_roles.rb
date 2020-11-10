# == Schema Information
#
# Table name: workspace_roles
#
#  id           :bigint           not null, primary key
#  role         :integer          default(0)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  member_id    :bigint           not null
#  workspace_id :bigint           not null
#
FactoryBot.define do
  factory :workspace_role do
    workspace_id { "" }
    member_id { "" }
    role { 1 }
  end
end
