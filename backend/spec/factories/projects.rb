# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  color        :integer          default(0)
#  description  :string(255)      not null
#  icon         :integer          default(0)
#  name         :string(255)      not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  workspace_id :bigint           not null
#
# Indexes
#
#  index_projects_on_workspace_id  (workspace_id)
#
# Foreign Keys
#
#  fk_rails_...  (workspace_id => workspaces.id)
#
FactoryBot.define do
  factory :project do
    name { 'プロジェクト1' }
    description { 'プロジェクト1の詳細' }
    color { 0 }
    icon { 0 }
    workspace { :workspace }
  end
end
