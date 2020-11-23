class AddNameToUserProfile < ActiveRecord::Migration[6.0]
  def change
    add_column :user_profiles, :name, :string
  end
end
