class TranqsController < ApplicationController
  before_action :set_tranq, only: [:show, :update, :feed]
  def show

    # items
    @items = Item.all
    @plants = Item.plant_items
    @heads = Item.head_items

    # friends
    @friends = User.all.sample(5)
  end

  def update
    @item = Item.find(params[:item_id])

    case params[:category]
    when "head" then update_head
    when "neck" then update_neck
    when "face" then update_face
    when "face" then update_face
    when "face" then update_face
    when "face" then update_face
    when "face" then update_face
    # when "neck" then update_neck
    else
      raise
    end


    params[:item_id]
  end

  def feed
    @tranq.last_fed = Time.now
    @tranq.save
  end

  private

  def update_head
    @tranq.head = @item
    @tranq.save
  end

  def update_neck
    @tranq.neck = @item
    @tranq.save
  end

  def update_face

  end

  def set_tranq
    @tranq = User.find(params[:id])
  end
end
