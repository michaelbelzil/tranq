class AddItemToUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :item, foreign_key: true
  end
end
