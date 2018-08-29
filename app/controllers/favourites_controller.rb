class FavouritesController < ApplicationController
  def create
    @new_item = Item.find(params[:item_id])
    @action = params[:action_favourite]
    if @action == "new"
      favourite = Favourite.new()
      favourite.user = current_user
      favourite.item = @new_item
      favourite.save
    end
    @category = params[:category_favourite]
    current_user.send(@category+ "=", @new_item)
    current_user.save
  end


  def destroy
    @favourite = Favourite.find(params[:id])
    @favourite.destroy
  end

end
