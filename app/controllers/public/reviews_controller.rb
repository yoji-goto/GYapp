class Public::ReviewsController < ApplicationController
  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      redirect_to public_movie_path(@review.movie_id)
    else
      render top
    end
  end

  def show
  end

  private

  def review_params
 params.require(:review).permit(:title, :review, :evaluation)
  end
end
