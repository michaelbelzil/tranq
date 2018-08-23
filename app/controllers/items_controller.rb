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
    raise
    @item.save
    # Unless @restaurant.valid?, #save will return false,
    # and @restaurant is not persisted.
    # TODO: present the form again with error messages.

  end

  private

  def item_params
    params.permit(:category)
  end
end
