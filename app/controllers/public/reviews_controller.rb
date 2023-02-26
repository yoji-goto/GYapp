class Public::ReviewsController < ApplicationController
  def new
    @review = Review.new(movie_id_params)
  end

  def create
    @review = Review.new(review_params)
    @review.customer_id = current_customer.id
    if @review.save
      redirect_to public_movie_path(@review.movie_id)
    else
      render :new
    end
  end

  def show
  end

  private
  def movie_id_params
  params.require(:review).permit(:movie_id)
  end
  def review_params
  params.require(:review).permit(:title, :review, :evaluation, :movie_id)
  end
end
