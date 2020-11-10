class CreateProjectMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :project_members do |t|
      t.bigint :project_id, null: false, foreign_key: true, add_index: true
      t.bigint :member_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
