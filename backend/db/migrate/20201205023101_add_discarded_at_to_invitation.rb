class AddDiscardedAtToInvitation < ActiveRecord::Migration[6.0]
  def change
    change_table :invitations, :bulk => true do |t|
      t.column :discarded_at, :datetime
      t.index :discarded_at
    end
  end
end
