# == Schema Information
#
# Table name: attendance_tasks
#
#  id            :bigint           not null, primary key
#  description   :string(255)
#  end_date_at   :datetime
#  name          :string(255)      not null
#  priority      :integer          default("low")
#  progress      :integer          default(0)
#  start_date_at :datetime
#  state         :integer          default("open")
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  attendance_id :bigint           not null
#  task_id       :bigint           not null
#
# Indexes
#
#  index_attendance_tasks_on_attendance_id  (attendance_id)
#
require 'rails_helper'

RSpec.describe AttendanceTask, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
