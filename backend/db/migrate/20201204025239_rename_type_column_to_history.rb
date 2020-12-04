class RenameTypeColumnToHistory < ActiveRecord::Migration[6.0]
  def change
    rename_column :histories, :type, :history_type
  end
end
