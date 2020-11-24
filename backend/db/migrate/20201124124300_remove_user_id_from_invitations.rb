class RemoveUserIdFromInvitations < ActiveRecord::Migration[6.0]
  def change
    remove_column :invitations, :user_id, :bigint
  end
end
