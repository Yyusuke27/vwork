class RenameTypeColumnToLog < ActiveRecord::Migration[6.0]
  def change
    rename_column :logs, :type, :log_type
  end
end
