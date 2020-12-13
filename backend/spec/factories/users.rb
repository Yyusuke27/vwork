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
FactoryBot.define do
  sequence :name do |n|
    "ユーザー#{n}"
  end

  sequence :email do |n|
    "user#{n}@test.com"
  end

  factory :user, :aliases => [:member] do
    name { generate :name }
    email { generate :email }
    password { 'test1234' }
    password_confirmation { 'test1234' }
    registration { true }
    role { 1 }

    transient do
      workspace_owner { true }
    end

    after(:create) do |member, evaluator|
      workspace = create(:workspace)

      create(:user_profile, :workspace => workspace, :user => member)

      workspace_member =
        if evaluator.workspace_owner
          create(
            :workspace_member,
            :member => member,
            :workspace => workspace
          )
        else
          create(
            :workspace_normal_member,
            :member => member,
            :workspace => workspace
          )
        end
      member.workspace_members << workspace_member

      project = create(:project, :workspace => workspace)
      member.project_members << create(
        :project_member,
        :member => member,
        :project => project
      )

      create(:task, :user => member, :workspace => workspace, :project => project)
    end
  end
end
