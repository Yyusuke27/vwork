class DropWorkspaceRole < ActiveRecord::Migration[6.0]
  def change
    drop_table :workspace_roles do |t|
      t.bigint 'workspace_id', :null => false
      t.bigint 'member_id', :null => false
      t.integer 'role', :default => 0
      t.timestamps :null => false
      t.index %w[workspace_id member_id], :name => 'index_workspace_roles_on_workspace_id_and_member_id'
    end
  end
end
