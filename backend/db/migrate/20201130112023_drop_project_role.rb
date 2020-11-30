class DropProjectRole < ActiveRecord::Migration[6.0]
  def change
    drop_table :project_roles do |t|
      t.bigint 'workspace_id', :null => false
      t.bigint 'member_id', :null => false
      t.integer 'role', :default => 0
      t.timestamps :null => false
    end
  end
end
