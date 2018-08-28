class ItemsController < ApplicationController
  def index
  end

  def show
  end

  def new
  end

  def create

    item = Item.new(item_params)
    item.user_id = current_user.id
    item.save

    current_user.update(item.category => item)
    favourite = Favourite.new()
    favourite.user = current_user
    favourite.item = item
    favourite.save

    redirect_to tranq_path(current_user)

  end

  private

  def item_params
    params.permit(:category, :photo, :owner)
  end
end
