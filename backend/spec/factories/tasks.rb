# == Schema Information
#
# Table name: tasks
#
#  id            :bigint           not null, primary key
#  description   :string(255)
#  end_date_at   :datetime
#  name          :string(255)      not null
#  priority      :integer          default("low")
#  progress      :integer          default(0)
#  start_date_at :datetime
#  state         :integer          default("open")
#  todays_task   :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  project_id    :bigint
#  user_id       :bigint           not null
#  workspace_id  :bigint           not null
#
# Indexes
#
#  index_tasks_on_user_id_and_project_id    (user_id,project_id)
#  index_tasks_on_user_id_and_workspace_id  (user_id,workspace_id)
#
FactoryBot.define do
  sequence :task_name do |n|
    "Task #{n}"
  end

  sequence :task_description do |n|
    "Task Description #{n}"
  end

  factory :task do
    user { :user }
    workspace { :workspace }
    project { :project }
    name { generate :task_name }
    description { generate :task_description }
    start_date_at { '2020-11-25 23:06:24' }
    end_date_at { '2020-11-25 23:06:24' }
    state { 'open' }
    progress { 1 }
    priority { 'low' }
    todays_task { false }
  end
end
