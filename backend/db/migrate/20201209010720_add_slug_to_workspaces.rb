class AddSlugToWorkspaces < ActiveRecord::Migration[6.0]
  def change
    change_table :workspaces, :bulk => true do |t|
      t.string :slug
      t.index :slug, :unique => true
    end
  end
end
