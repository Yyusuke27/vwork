class CreateWorkspaceMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :workspace_members do |t|
      t.bigint :workspace_id, null: false, foreign_key: true, add_index: true
      t.bigint :member_id, null: false, foreign_key: true
      t.integer :role, default: 0

      t.timestamps
    end
  end
end
