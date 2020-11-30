# == Schema Information
#
# Table name: logs
#
#  id         :bigint           not null, primary key
#  new_state  :string(255)
#  old_state  :string(255)
#  type       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  task_id    :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_logs_on_task_id  (task_id)
#
class Log < ApplicationRecord
end
