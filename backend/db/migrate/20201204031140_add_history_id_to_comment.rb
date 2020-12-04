class AddHistoryIdToComment < ActiveRecord::Migration[6.0]
  def change
    change_table :comments, :bulk => true do |t|
      t.column :history_id, :bigint, :after => :task_id
      t.index :history_id
    end
  end
end
