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
require 'rails_helper'

RSpec.describe Notification, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
