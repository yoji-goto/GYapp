require "test_helper"

class Admin::ReviewsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get admin_reviews_show_url
    assert_response :success
  end
end