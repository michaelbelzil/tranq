class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :items, :type, :owner
  end
end
