class FavouritesController < ApplicationController
  def create
    @new_item = Item.find(params[:item_id])
    @friend = User.find(params[:friend_id])
    @action = params[:action_favourite]
    if @action == "new"
      favourite = Favourite.new()
      favourite.user = current_user
      favourite.item = @new_item
      favourite.save
      if ( current_user.id != @new_item.user_id)
        creator = User.find(@new_item.user_id)
        if creator == @friend
          @friend.points += 150
          @friend.save
        else
          creator.points += 100
          creator.save
          @friend.points += 50
          @friend.save
        end
        current_user.points += 1
        current_user.save

      end

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
