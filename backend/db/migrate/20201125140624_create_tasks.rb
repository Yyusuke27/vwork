class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.bigint :user_id, :null => false
      t.bigint :workspace_id, :null => false
      t.bigint :project_id
      t.string :name, :null => false
      t.string :description
      t.datetime :start_date_at
      t.datetime :end_date_at
      t.integer :state, :default => 0
      t.integer :progress, :default => 0
      t.integer :priority, :default => 0
      t.boolean :todays_task, :default => false

      t.timestamps
    end

    change_table :tasks, :bulk => true do |t|
      t.index [:user_id, :workspace_id]
      t.index [:user_id, :project_id]
    end
  end
end
