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
    @select_category = @favourite.item.category

    if current_user.send("#{@select_category}") == @favourite.item
      blank_canvas = Item.find_by(category: @select_category, owner: "blank")
      current_user.send("#{@select_category}=", blank_canvas)
      current_user.save

      @favourite.destroy
      @current_item = true
      # redirect_to tranq_path(current_user), method: :get
    else
      @favourite.destroy
    end
  end

end


# blank_canvass = Item.select{ |item| item.category == select_category }.select { |item| item.owner == "blank" }.first
