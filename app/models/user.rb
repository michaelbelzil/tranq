class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # has_many :items
  belongs_to :head, :class_name => 'Item', foreign_key: :head_id, optional: true
  belongs_to :face, :class_name => 'Item', foreign_key: :face_id, optional: true
  belongs_to :neck, :class_name => 'Item', foreign_key: :neck_id, optional: true
  belongs_to :body, :class_name => 'Item', foreign_key: :body_id, optional: true
  belongs_to :couch, :class_name => 'Item', foreign_key: :couch_id, optional: true
  belongs_to :table, :class_name => 'Item', foreign_key: :table_id, optional: true
  belongs_to :side_table, :class_name => 'Item', foreign_key: :side_table_id, optional: true
  belongs_to :floor, :class_name => 'Item', foreign_key: :floor_id, optional: true
  belongs_to :wall, :class_name => 'Item', foreign_key: :wall_id, optional: true
  belongs_to :lamp, :class_name => 'Item', foreign_key: :lamp_id, optional: true
  belongs_to :plant, :class_name => 'Item', foreign_key: :plant_id, optional: true
end
