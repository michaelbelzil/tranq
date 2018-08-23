class TranqsController < ApplicationController
  before_action :set_tranq, only: [:show, :update, :feed]
  def show

    # items
    @items = Item.all
    @heads = Item.head_items
    @faces = Item.face_items
    @necks = Item.neck_items
    @bodies = Item.body_items
    @couches = Item.couch_items
    @tables = Item.table_items
    @side_tables = Item.side_table_items
    @windows = Item.window_items
    @plants = Item.plant_items
    @floors = Item.floor_items
    @walls = Item.wall_items


    # friends
    @friends = User.all.sample(5)
    @categories = Item.select(:category).map(&:category).uniq
  end

  def update
    @item = Item.find(params[:item_id])

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
    @tranq.last_fed = Time.now
    @tranq.save
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
