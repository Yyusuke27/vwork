class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.bigint :user_id
      t.bigint :task_id
      t.string :comment

      t.timestamps

      t.index :task_id
    end
  end
end
