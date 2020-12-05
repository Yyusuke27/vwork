class RenameStaredAtToAttendance < ActiveRecord::Migration[6.0]
  def change
    rename_column :attendances, :stared_at, :started_at
  end
end
