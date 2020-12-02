class CreateAttendances < ActiveRecord::Migration[6.0]
  def change
    create_table :attendances do |t|
      t.bigint :user_id, :null => false
      t.bigint :workspace_id, :null => false
      t.string :comment
      t.datetime :stared_at
      t.datetime :end_at
      t.datetime :rest_started_at
      t.datetime :rest_ended_at
      t.integer :total_work_time
      t.integer :total_reset_time

      t.timestamps
    end

    change_table :attendances, :bulk => true do |t|
      t.index [:user_id, :workspace_id]
      t.index [:user_id, :workspace_id, :created_at]
    end
  end
end
