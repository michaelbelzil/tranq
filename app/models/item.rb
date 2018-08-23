class Item < ApplicationRecord

  scope :head_items, -> { where(category: "head") }
  scope :face_items, -> { where(category: "face") }
  scope :neck_items, -> { where(category: "neck") }
  scope :body_items, -> { where(category: "body") }
  scope :couch_items, -> { where(category: "couch") }
  scope :table_items, -> { where(category: "table") }
  scope :side_table_items, -> { where(category: "side_table") }
  scope :window_items, -> { where(category: "window") }
  scope :plant_items, -> { where(category: "plant") }
  scope :floor_items, -> { where(category: "floor") }
  scope :wall_items, -> { where(category: "wall") }
end
