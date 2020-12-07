# == Schema Information
#
# Table name: notifications
#
#  id                :bigint           not null, primary key
#  notification_type :integer
#  unread            :boolean
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  task_id           :bigint
#  user_id           :bigint
#  workspace_id      :bigint
#
# Indexes
#
#  index_notifications_on_user_id  (user_id)
#
class Notification < ApplicationRecord
  belongs_to :task
  belongs_to :user
  belongs_to :workspace

  enum :notification_type => {
    :log_item => 0,
    :comment_item => 1
  }
end
