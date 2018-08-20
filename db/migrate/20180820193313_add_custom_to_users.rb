class AddCustomToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :last_fed, :datetime
    add_column :users, :happiness, :integer
    add_column :users, :tucked_in, :boolean
    add_reference :users, :head, foreign_key: true
    add_reference :users, :face, foreign_key: true
    add_reference :users, :neck, foreign_key: true
    add_reference :users, :body, foreign_key: true
    add_reference :users, :couch, foreign_key: true
    add_reference :users, :table, foreign_key: true
    add_reference :users, :side_table, foreign_key: true
    add_reference :users, :lamp, foreign_key: true
    add_reference :users, :plant, foreign_key: true
    add_reference :users, :wall, foreign_key: true
    add_reference :users, :floor, foreign_key: true
  end
end
