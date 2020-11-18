class AddIndexWorkspaceRolesWorkspaceIdMemberId < ActiveRecord::Migration[6.0]
  def change
    add_index :workspace_roles, [:workspace_id, :member_id]
  end
end
