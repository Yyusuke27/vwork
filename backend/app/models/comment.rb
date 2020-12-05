# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  history_id :bigint
#  task_id    :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_comments_on_history_id  (history_id)
#  index_comments_on_task_id     (task_id)
#
class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :task
  belongs_to :history

  validates :body, :presence => true
end
