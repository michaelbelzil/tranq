class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :items
  belongs_to :head, :class_name => 'Item', foreign_key: :head_item_id, optional: true
  belongs_to :face, :class_name => 'Item', foreign_key: :face_item_id, optional: true
  belongs_to :neck, :class_name => 'Item', foreign_key: :neck_item_id, optional: true
  belongs_to :body, :class_name => 'Item', foreign_key: :body_item_id, optional: true
  belongs_to :couch, :class_name => 'Item', foreign_key: :couch_item_id, optional: true
  belongs_to :table, :class_name => 'Item', foreign_key: :table_item_id, optional: true
  belongs_to :side_table, :class_name => 'Item', foreign_key: :side_table_item_id, optional: true
  belongs_to :floor, :class_name => 'Item', foreign_key: :floor_item_id, optional: true
  belongs_to :wall, :class_name => 'Item', foreign_key: :wall_item_id, optional: true
  belongs_to :window, :class_name => 'Item', foreign_key: :window_item_id, optional: true
  belongs_to :plant, :class_name => 'Item', foreign_key: :plant_item_id, optional: true

  # validate :items_are_correct_category

  def items_are_correct_category
    unless self.head.category == nil || self.head.category == "head"
      errors.add(:head, "wrong category")
    end
  end
end
