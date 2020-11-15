class ChangeInviteToInvitation < ActiveRecord::Migration[6.0]
  def change
    rename_table :invites, :invitations
  end
end
