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
require 'rails_helper'

RSpec.describe Task, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
