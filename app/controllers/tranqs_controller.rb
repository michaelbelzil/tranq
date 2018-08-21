class TranqsController < ApplicationController
  before_action :set_tranq, only: [:show, :update, :feed]
  def show
  end

  def update

  end

  def feed
    @tranq.last_fed = Time.now
    @tranq.save
  end

  private

  def set_tranq
    @tranq = User.find(params[:id])
  end
end
