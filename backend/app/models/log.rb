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
  after_create :create_history

  belongs_to :user
  belongs_to :task

  enum :type => {
    :create => 0,
    :name => 1,
    :description => 2,
    :startDateAt => 3,
    :endDateAt => 4,
    :state => 5,
    :progress => 6,
    :priority => 7,
    :todaysTask => 8,
    :project => 9,
    :user => 10
  }

  private

  def create_history
    # TODO: Historyを作成
  end
end
