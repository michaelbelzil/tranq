class AddCustomToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :last_fed, :datetime
    add_column :users, :happiness, :integer
    add_column :users, :tucked_in, :boolean
    add_reference :users, :head_item
    add_reference :users, :face_item
    add_reference :users, :neck_item
    add_reference :users, :body_item
    add_reference :users, :couch_item
    add_reference :users, :table_item
    add_reference :users, :side_table_item
    add_reference :users, :window_item
    add_reference :users, :plant_item
    add_reference :users, :floor_item
    add_reference :users, :wall_item
  end
end
