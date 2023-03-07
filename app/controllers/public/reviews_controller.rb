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
    @review = Review.find(params[:id])
    @comments = Comment.where(review_id: params[:id], is_deisplayed: false)
    @id = params[:id]
    @comment = Comment.new
    @comment.review_id = @id
  end

  def report
    @review = Review.find(params[:review_id])
    @review.update(is_reported: true)
    redirect_to public_review_path(@review.id)
  end

  def hidden
    @review = Review.find(params[:review_id])
    @review.update(is_displayed: true)
    redirect_to public_movie_path(@review.movie_id)
  end

  private
  def movie_id_params
  params.require(:review).permit(:movie_id)
  end
  def review_params
  params.require(:review).permit(:title, :review, :evaluation, :movie_id)
  end
end
