class CreateInvites < ActiveRecord::Migration[6.0]
  def change
    create_table :invites do |t|
      t.references :user, null: false, foreign_key: true
      t.references :workspace, null: false, foreign_key: true
      t.string :invitation_token
      t.datetime :invitation_expire_at

      t.timestamps
    end
  end
end
