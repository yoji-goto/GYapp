class Public::MoviesController < ApplicationController
  def index
  end

  def show
    @reviews = Review.where(movie_id: params[:id])
    @review = Review.new
    @id = params[:id]
    @review.movie_id = @id
  end
end
