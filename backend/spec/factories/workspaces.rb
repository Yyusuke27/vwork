# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  name       :string(255)
#  slug       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  path_id    :string(191)
#
# Indexes
#
#  index_workspaces_on_path_id  (path_id)
#  index_workspaces_on_slug     (slug) UNIQUE
#
FactoryBot.define do
  sequence :workspace_name do |n|
    "Workspace#{n}"
  end

  factory :workspace do
    name { generate :workspace_name }
    active { true }

    after(:create) do |workspace|
      workspace.slug = workspace.path_id.downcase
      workspace.save!
    end
  end
end
