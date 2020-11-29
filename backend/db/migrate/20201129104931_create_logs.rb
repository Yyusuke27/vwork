class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      t.bigint :user_id
      t.bigint :task_id
      t.integer :type
      t.string :old_state
      t.string :new_state

      t.timestamps
    end
  end
end
