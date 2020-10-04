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
FactoryBot.define do
  factory :workspace_member do
    workspace { nil }
    member { nil }
    role { 1 }
  end
end
