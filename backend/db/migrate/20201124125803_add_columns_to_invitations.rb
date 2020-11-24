class AddColumnsToInvitations < ActiveRecord::Migration[6.0]
  def change
    change_table :invitations, :bulk => true do |t|
      t.column :name, :string, :after => :workspace_id
      t.column :email, :string, :after => :name
    end
  end
end
