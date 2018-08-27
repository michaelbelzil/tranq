class AddClubhouseNameToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :clubhouse_name, :string
  end
end
