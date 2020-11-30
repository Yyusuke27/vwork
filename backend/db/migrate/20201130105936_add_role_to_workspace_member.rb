class AddRoleToWorkspaceMember < ActiveRecord::Migration[6.0]
  def change
    add_column :workspace_members, :role, :integer, :default => 0, :after => :member_id
  end
end
