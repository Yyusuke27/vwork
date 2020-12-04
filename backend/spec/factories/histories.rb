# == Schema Information
#
# Table name: histories
#
#  id           :bigint           not null, primary key
#  history_type :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  task_id      :bigint
#
# Indexes
#
#  index_histories_on_task_id  (task_id)
#
FactoryBot.define do
  factory :history do
    task_id { '' }
    comment_id { '' }
    log_id { '' }
    type { 1 }
  end
end
