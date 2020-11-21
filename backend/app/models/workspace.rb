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

  def self.create_invitation(invitation, workspace)
    password = SecureRandom.hex(8)

    invitee = User.find_by(:email => invitation[:email])
    if invitee.blank?
      invitee = User.new(
        :name => invitation[:name],
        :email => invitation[:email],
        :password => password,
        :password_confirmation => password
      )
      invitee.save!
    end

    random_hex = SecureRandom.hex(16)
    invitation_token = Digest::SHA512.hexdigest(random_hex)

    # トークンの期限を1時間後に設定
    invitation_expire_at = Time.current + 60 * 60
    invitation = Invitation.new(
      :user_id => invitee.id,
      :workspace_id => workspace.id,
      :invitation_token => invitation_token,
      :invitation_expire_at => invitation_expire_at
    )
    invitation.save!
  end

  private

  def set_path_id
    # 空もしくは同じpath_idが既に存在していた場合に作成
    while self.path_id.blank? || Workspace.find_by(:path_id => self.path_id).present? do
      self.path_id = SecureRandom.alphanumeric(15)
    end
  end
end
