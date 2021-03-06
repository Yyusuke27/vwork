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
class Project < ApplicationRecord
  belongs_to :workspace
  has_many :project_members
  has_many :members, :class_name => 'User', :through => :project_members
  accepts_nested_attributes_for :members
  has_many :project_roles
  has_many :tasks, :dependent => :destroy

  validates :name, :presence => true

  def member?(user_id)
    project_members.exists?(:member_id => user_id)
  end
end
