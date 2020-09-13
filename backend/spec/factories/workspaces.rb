# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :workspace do
    name { 'MyString' }
    active { false }
  end
end
