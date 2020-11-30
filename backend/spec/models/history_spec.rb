# == Schema Information
#
# Table name: histories
#
#  id         :bigint           not null, primary key
#  type       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  comment_id :bigint
#  log_id     :bigint
#  task_id    :bigint
#
# Indexes
#
#  index_histories_on_task_id  (task_id)
#
require 'rails_helper'

RSpec.describe History, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
