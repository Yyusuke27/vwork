# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  path_id    :string(191)
#
# Indexes
#
#  index_workspaces_on_path_id  (path_id)
#
class Workspace < ApplicationRecord
  before_save :set_path_id

  has_many :workspace_members
  has_many :members, :class_name => 'User', :through => :workspace_members
  has_many :projects
  has_many :invitations
  accepts_nested_attributes_for :members

  validates :name, :presence => true

  private

  def set_path_id
    while self.path_id.blank? || Workspace.find_by(:path_id => self.path_id).present? do
      self.path_id = SecureRandom.alphanumeric(15)
    end
  end
end
