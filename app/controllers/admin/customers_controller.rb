class Admin::CustomersController < ApplicationController
  def show
    @customer = Customer.find(params[:id])
  end

  def index
    @customers = Customer.all
  end

  def edit
    @customer = current_customer
  end

  def update
    @customer = current_customer
    if Customer.update(customer_params)
      redirect_to public_customer_path(current_customer.id)
    else
      render :index
    end
  end

  def withdrawal
    @customer = current_customer
    @customer.update(is_deleted: true)
    reset_session
    redirect_to  root_path
  end

  private
  def customer_params
    params.require(:customer).permit(:name, :email, :self_introduction)
  end
end
