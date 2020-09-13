class CreateUserProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :user_profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.references :workspace, null: false, foreign_key: true
      t.string :position

      t.timestamps
    end

    add_index :user_profiles, %i[user_id workspace_id], unique: true
  end
end
