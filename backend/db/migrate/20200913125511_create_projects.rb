class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :color, default: 0
      t.integer :icon, default: 0
      t.references :workspace, null: false, foreign_key: true

      t.timestamps
    end
  end
end
