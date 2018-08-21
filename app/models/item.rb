class Item < ApplicationRecord

  scope :head_items, -> { where(category: "head") }
  scope :neck_items, -> { where(category: "neck") }
  scope :plant_items, -> { where(category: "plant") }
end
