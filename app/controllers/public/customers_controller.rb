class Public::CustomersController < ApplicationController
  def show
    @customer = Customer.find(params[:id])
  end

  def edit
    @customer = current_customer
  end

  def update
    @customer = current_customer
    if Customer.update(customer_params)
      redirect_to public_customer_path(current_customer.id)
    else
      render :root
    end
  end

  private
  def customer_params
    params.require(:customer).permit(:name, :email, :self_introduction)
  end
end
