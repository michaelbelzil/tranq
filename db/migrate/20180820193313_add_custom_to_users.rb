class AddCustomToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :last_fed, :datetime
    add_column :users, :happiness, :integer
    add_column :users, :tucked_in, :boolean
  end
end
