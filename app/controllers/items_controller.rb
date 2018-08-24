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
    redirect_to tranq_path(current_user)

  end

  private

  def item_params
    params.permit(:category, :photo)
  end
end
