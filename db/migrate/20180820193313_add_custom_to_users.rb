class AddCustomToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :last_fed, :datetime
    add_column :users, :happiness, :integer
    add_column :users, :tucked_in, :boolean
    add_reference :users, :head
    add_reference :users, :face
    add_reference :users, :neck
    add_reference :users, :body
    add_reference :users, :couch
    add_reference :users, :table
    add_reference :users, :side_table
    add_reference :users, :lamp
    add_reference :users, :plant
    add_reference :users, :floor
    add_reference :users, :wall
  end
end
