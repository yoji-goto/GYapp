class Admin::ReviewsController < ApplicationController
  def show
    @review = Review.find(params[:id])
    @comments = Comment.where(review_id: params[:id])
    @id = params[:id]
    @comment = Comment.new
    @comment.review_id = @id
  end

  def index
    @reviews = Review.where(is_reported: true)
    @comments = Comment.where(is_reported: true)
  end

  def hidden
    @review = Review.find(params[:id])
    @review.update(is_displayed: true)
    redirect_to admins_movie_path(@review.movie_id)
  end
end
