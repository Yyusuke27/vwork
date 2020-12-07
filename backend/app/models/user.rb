# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  active                 :boolean          default(FALSE)
#  allow_password_change  :boolean          default(FALSE)
#  confirmation_sent_at   :datetime
#  confirmation_token     :string(255)
#  confirmed_at           :datetime
#  email                  :string(255)
#  encrypted_password     :string(255)      default(""), not null
#  has_unread             :boolean          default(FALSE)
#  image                  :string(255)
#  name                   :string(255)
#  nickname               :string(255)
#  provider               :string(255)      default("email"), not null
#  registration           :boolean          default(FALSE)
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  role                   :integer          default("normal")
#  tokens                 :text(65535)
#  uid                    :string(255)      default(""), not null
#  unconfirmed_email      :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_uid_and_provider      (uid,provider) UNIQUE
#
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :workspace_members, :foreign_key => 'member_id'
  has_many :workspaces, :through => :workspace_members
  has_many :project_members, :foreign_key => 'member_id'
  has_many :projects, :through => :project_members
  has_many :user_profiles, :dependent => :destroy
  has_many :invitations, :dependent => :destroy
  has_many :tasks, :dependent => :destroy
  has_many :attendances, :dependent => :destroy
  has_many :notifications, :dependent => :destroy

  enum :role => %i[normal admin]

  def update_registration
    return if registration?

    user = self
    user.registration = true
    user.save!
  end
end
