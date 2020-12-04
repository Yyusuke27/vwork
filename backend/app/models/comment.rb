# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  comment    :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  task_id    :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_comments_on_task_id  (task_id)
#
class Comment < ApplicationRecord
  after_create :create_history

  belongs_to :user
  belongs_to :task

  private

  def create_history
    # TODO: Historyを作成
  end
end
