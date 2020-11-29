class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.bigint :user_id
      t.bigint :task_id
      t.bigint :workspace_id
      t.integer :type
      t.boolean :unread

      t.timestamps
    end
  end
end
