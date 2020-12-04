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
class History < ApplicationRecord
  has_one :log, :dependent => :destroy
  has_one :comment, :dependent => :destroy
  belongs_to :task

  enum :history_type => {
    :log_item => 0,
    :comment_item => 1
  }
end
