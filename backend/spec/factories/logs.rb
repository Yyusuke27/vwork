# == Schema Information
#
# Table name: logs
#
#  id         :bigint           not null, primary key
#  log_type   :integer
#  new_state  :string(255)
#  old_state  :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  history_id :bigint
#  task_id    :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_logs_on_history_id  (history_id)
#  index_logs_on_task_id     (task_id)
#
FactoryBot.define do
  factory :log do
    user_id { '' }
    task_id { '' }
    type { 1 }
    old_state { 'MyString' }
    new_state { 'MyString' }
  end
end
