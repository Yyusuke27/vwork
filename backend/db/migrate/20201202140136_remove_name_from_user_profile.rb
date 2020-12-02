class RemoveNameFromUserProfile < ActiveRecord::Migration[6.0]
  def change
    remove_column :user_profiles, :name, :string
  end
end
