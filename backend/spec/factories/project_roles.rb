# == Schema Information
#
# Table name: project_roles
#
#  id         :bigint           not null, primary key
#  role       :integer          default("normal")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  member_id  :bigint           not null
#  project_id :bigint           not null
#
FactoryBot.define do
  factory :project_role do
    project_id { "" }
    member_id { "" }
    role { 1 }
  end
end
