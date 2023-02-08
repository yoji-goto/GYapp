require "test_helper"

class Public::ReviewsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get public_reviews_new_url
    assert_response :success
  end

  test "should get show" do
    get public_reviews_show_url
    assert_response :success
  end
end
