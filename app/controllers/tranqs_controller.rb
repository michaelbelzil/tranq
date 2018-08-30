class TranqsController < ApplicationController
  before_action :set_tranq, only: [:show, :update, :feed, :tuck_in]
  def show
    # items
    @items = Item.all
    @favourites = Favourite.all.select { |element| element.user_id == current_user.id}
    @items = [];
    @favourites.each do |favorite|
      @items << favorite.item
    end

    @heads = @items.select { |element| element.category == "head" }
    @faces = @items.select { |element| element.category == "face" }
    @necks = @items.select { |element| element.category == "neck" }
    @bodies = @items.select { |element| element.category == "body" }
    @couches = @items.select { |element| element.category == "couch" }
    @tables = @items.select { |element| element.category == "table" }
    @side_tables = @items.select { |element| element.category == "side_table" }
    @windows = @items.select { |element| element.category == "window" }
    @plants = @items.select { |element| element.category == "plant" }
    @floors = @items.select { |element| element.category == "floor" }
    @walls = @items.select { |element| element.category == "wall" }

    # friends
    @friends = User.all.sample(5)
    @categories = ["head", "face", "neck", "body", "plant", "couch", "table", "side_table", "window", "floor", "wall"]
    @user = User.find(params[:id])
    # happiness

    # @tranq.last_fed
    @happiness = @tranq.compute_happiness
    @current_user = current_user
  end

  def visit
    @friend = User.find(params[:friend_id])
    @categories = ["head", "face", "neck", "body", "plant", "couch", "table", "side_table", "window", "floor", "wall"]
  end

  def interact
    @friend = User.find(params[:friend_id])
    @item_copy = @friend.send(params[:category])
    user_favourites = Favourite.all.select { |element| element.user_id == current_user.id && element.item_id == @item_copy.id}
    @category = params[:category]
    if(@item_copy.owner == "blank" || current_user == @friend)
      @action = ""
    elsif (user_favourites.empty?)
      @action = "new"
      @text = "Do you want save this new item?"
    else
      @action = "upload"
      @text = "Do you want use this item?"
    end

    #if user_favourites.empty?
     # favourite = Favourite.new()
     # favourite.user = current_user
     # favourite.item = @item_copy
     # favourite.save
     # current_user.send( + "=", @item_copy)
    #end
    #@category = params[:category]


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

  def tuck_in
    @tranq.tucked_in = !@tranq.tucked_in
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
