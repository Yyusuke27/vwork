class RenameTypeColumnToNotification < ActiveRecord::Migration[6.0]
  def change
    rename_column :notifications, :type, :notification_type
  end
end
