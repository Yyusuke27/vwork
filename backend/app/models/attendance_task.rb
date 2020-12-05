# == Schema Information
#
# Table name: attendance_tasks
#
#  id            :bigint           not null, primary key
#  description   :string(255)
#  end_date_at   :datetime
#  name          :string(255)      not null
#  priority      :integer          default(0)
#  progress      :integer          default(0)
#  start_date_at :datetime
#  state         :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  attendance_id :bigint           not null
#  task_id       :bigint           not null
#
# Indexes
#
#  index_attendance_tasks_on_attendance_id  (attendance_id)
#
class AttendanceTask < ApplicationRecord
  belongs_to :attendance

  enum :state => { :open => 0, :progress => 1, :done => 2 }
  enum :priority => { :low => 0, :normal => 1, :high => 2 }

  def self.create_attendance_task(attendance, task)
    AttendanceTask.create!(
      :attendance_id => attendance.id,
      :task_id => task[:id],
      :name => task[:name],
      :description => task[:description],
      :start_date_at => task[:startDateAt],
      :end_date_at => task[:endDateAt],
      :state => task[:state],
      :progress => task[:progress],
      :priority => task[:priority]
    )
  end
end
