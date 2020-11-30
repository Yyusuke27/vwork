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
FactoryBot.define do
  factory :comment do
    user_id { '' }
    task_idi { '' }
    comment { 'MyString' }
  end
end
