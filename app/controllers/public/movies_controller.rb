class Public::MoviesController < ApplicationController
  def index
  end

  def show
    @id = params[:id]
    @reviews = Review.where(movie_id: params[:id])
    @review = Review.new
    @review.movie_id = @id
  end
end
