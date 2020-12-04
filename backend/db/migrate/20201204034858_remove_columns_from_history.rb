class RemoveColumnsFromHistory < ActiveRecord::Migration[6.0]
  def up
    change_table :histories, :bulk => true do |t|
      t.remove :comment_id
      t.remove :log_id
    end
  end

  def down
    change_table :histories, :bulk => true do |t|
      t.column :comment_id, :bigint, :after => :task_id
      t.column :log_id, :bigint, :after => :comment_id
    end
  end
end
