class TranqsController < ApplicationController
  before_action :set_tranq, only: [:show, :update, :feed]
  def show
    # items
    @items = Item.all
    @heads = Item.head_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @faces = Item.face_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @necks = Item.neck_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @bodies = Item.body_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @couches = Item.couch_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @tables = Item.table_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @side_tables = Item.side_table_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @windows = Item.window_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @plants = Item.plant_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @floors = Item.floor_items.select { |element| element.user_id == current_user.id || element.owner == "public" }
    @walls = Item.wall_items.select { |element| element.user_id == current_user.id || element.owner == "public" }


    # friends
    @friends = User.all.sample(5)
    @categories = Item.select(:category).map(&:category).uniq
    @user = User.find(params[:id])
    # happiness

    # @tranq.last_fed
    @happiness = @tranq.compute_happiness

  end

  def get_happiness
    @happiness = @tranq.compute_happiness
  end

  def update
    @item = Item.find(params[:item_id])
    @user = current_user
    case params[:category]
    when "head" then update_head
    when "face" then update_face
    when "neck" then update_neck
    when "body" then update_body
    when "couch" then update_couch
    when "table" then update_table
    when "side_table" then update_side_table
    when "window" then update_window
    when "plant" then update_plant
    when "floor" then update_floor
    when "wall" then update_wall
    else
      raise
    end

    # params[:item_id]
  end

  def feed
    @tranq.feed!
    @happiness = @tranq.happiness
  end

  def create

    # Unless @restaurant.valid?, #save will return false,
    # and @restaurant is not persisted.
    # TODO: present the form again with error messages.

  end

  private

  def update_head
    @tranq.head = @item
    @tranq.save
  end

  def update_face
    @tranq.face = @item
    @tranq.save
  end

  def update_neck
    @tranq.neck = @item
    @tranq.save
  end

  def update_body
    @tranq.body = @item
    @tranq.save
  end

  def update_couch
    @tranq.couch = @item
    @tranq.save
  end

  def update_table
    @tranq.table = @item
    @tranq.save
  end

  def update_side_table
    @tranq.side_table = @item
    @tranq.save
  end

  def update_window
    @tranq.window = @item
    @tranq.save
  end

  def update_plant
    @tranq.plant = @item
    @tranq.save
  end

  def update_floor
    @tranq.floor = @item
    @tranq.save
  end

  def update_wall
    @tranq.wall = @item
    @tranq.save
  end

  def set_tranq
    @tranq = User.find(params[:id])
  end
end
