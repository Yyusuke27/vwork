class AddColumnToWorkspace < ActiveRecord::Migration[6.0]
  def change
    add_column :workspaces, :path_id, :string, after: :id, limit: 191
    add_index :workspaces, :path_id
  end
end
