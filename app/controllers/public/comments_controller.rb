class Public::CommentsController < ApplicationController
  def new
    @commnt = Comment.new(comment_params)
  end
  def create
    @comment = Comment.new(comment_params)
    @comment.customer_id = current_customer.id
    if @comment.save
      redirect_to public_review_path(@comment.review.id)
    else
      render :root
    end
  end
  def report
    @comment = Comment.find(params[:id])
    @comment.update(is_reported: true)
    redirect_to public_review_path(@comment.review.id)
  end

  private
  def comment_params
   params.require(:comment).permit(:comment, :review_id)
  end
end
