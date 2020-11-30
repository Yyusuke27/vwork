class CreateHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
      t.bigint :task_id
      t.bigint :comment_id
      t.bigint :log_id
      t.integer :type

      t.timestamps

      t.index :task_id
    end
  end
end
