class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favourites
  has_many :items, through: :favourites

  before_validation :starting_values, on: :create
  after_create :starting_categories

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

  validates :happiness, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  # validate :items_are_correct_category

  def starting_categories
     Item::CATEGORIES.each do |category|
      item = Item.find_by(category: category, owner: "blank")
      Favourite.create(user: self, item: item)
    end
  end

  def starting_values
    self.happiness = 75
    self.last_fed = Time.now
    self.tucked_in = false

    Item::CATEGORIES.each do |category|
      item = Item.find_by(category: category, owner: "blank")
      self.send("#{category}=", item)
    end

    #self.head = Item.head_items.find { |element| element.owner == "blank" }
    #self.face = Item.face_items.find { |element| element.owner == "blank" }
    #self.neck = Item.neck_items.find { |element| element.owner == "blank" }
    #self.body = Item.body_items.find { |element| element.owner == "blank" }
    #self.couch = Item.couch_items.find { |element| element.owner == "blank" }
    #self.table = Item.table_items.find { |element| element.owner == "blank" }
    #self.side_table = Item.side_table_items.find { |element| element.owner == "blank" }
    #self.window = Item.window_items.find { |element| element.owner == "blank" }
    #self.plant = Item.plant_items.find { |element| element.owner == "blank" }
    #self.floor = Item.floor_items.find { |element| element.owner == "blank" }
    #self.wall = Item.wall_items.find { |element| element.owner == "blank" }

    # Favourite.new(user=curenn item =selg)
  end

  def items_are_correct_category
    unless self.head.category == nil || self.head.category == "head"
      errors.add(:head, "wrong category")
    end
  end

  def feed!
    if self.happiness >= 90
      self.happiness = 100
    else
      self.happiness += 10
    end

    self.last_fed = Time.now
    self.save
  end

  def compute_happiness
    # binding.pry
    if self.tucked_in
      cicle_time = 1000
    else
      cicle_time = 10
    end
    self.happiness = [(self.happiness - ((Time.now - self.last_fed)/cicle_time)).ceil, 0].max
    self.save
    if self.happiness == 0
      self.points = self.points * 0.8
      self.save
    end
    @happiness = self.happiness
  end
end

