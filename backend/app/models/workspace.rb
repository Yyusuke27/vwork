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
  require 'securerandom'
  require 'digest'

  before_create :set_path_id

  has_many :workspace_members
  has_many :members, :class_name => 'User', :through => :workspace_members
  has_many :projects
  has_many :invitations
  has_many :workspace_roles
  accepts_nested_attributes_for :members
  has_many :user_profiles

  validates :name, :presence => true

  private

  def set_path_id
    # 空もしくは同じpath_idが既に存在していた場合に作成
    while self.path_id.blank? || Workspace.find_by(:path_id => self.path_id).present? do
      self.path_id = SecureRandom.alphanumeric(15)
    end
  end
end
