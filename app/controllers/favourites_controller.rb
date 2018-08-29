class FavouritesController < ApplicationController

  def destroy
    @favourite = Favourite.find(params[:id])
    @favourite.destroy
  end

end
