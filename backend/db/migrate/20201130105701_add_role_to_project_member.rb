class AddRoleToProjectMember < ActiveRecord::Migration[6.0]
  def change
    add_column :project_members, :role, :integer, :default => 0, :after => :member_id
  end
end
