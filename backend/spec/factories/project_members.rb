# == Schema Information
#
# Table name: project_members
#
#  id         :bigint           not null, primary key
#  role       :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  member_id  :bigint           not null
#  project_id :bigint           not null
#
FactoryBot.define do
  factory :project_member do
    project { nil }
    member { nil }
    role { 1 }
  end
end
