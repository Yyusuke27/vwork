# == Schema Information
#
# Table name: attendances
#
#  id               :bigint           not null, primary key
#  comment          :string(255)
#  end_at           :datetime
#  rest_ended_at    :datetime
#  rest_started_at  :datetime
#  started_at       :datetime
#  total_reset_time :integer
#  total_work_time  :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  user_id          :bigint           not null
#  workspace_id     :bigint           not null
#
# Indexes
#
#  index_attendances_on_user_id_and_workspace_id                 (user_id,workspace_id)
#  index_attendances_on_user_id_and_workspace_id_and_created_at  (user_id,workspace_id,created_at)
#
FactoryBot.define do
  factory :attendance do
    user { :user }
    workspace { :workspace }
  end
end
