class CreateAttendanceTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :attendance_tasks do |t|
      t.bigint :attendance_id, :null => false
      t.bigint :task_id, :null => false
      t.string :name, :null => false
      t.string :description
      t.datetime :start_date_at
      t.datetime :end_date_at
      t.integer :state, :default => 0
      t.integer :progress, :default => 0
      t.integer :priority, :default => 0

      t.timestamps

      t.index :attendance_id
    end
  end
end
