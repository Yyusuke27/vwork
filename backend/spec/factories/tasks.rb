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
  factory :task do
    user_id { '' }
    workspace_id { '' }
    project_id { '' }
    name { 'MyString' }
    description { 'MyString' }
    start_date_at { '2020-11-25 23:06:24' }
    end_date_at { '2020-11-25 23:06:24' }
    state { 1 }
    progress { 1 }
    priority { 1 }
    todays_task { false }
  end
end
