require "test_helper"

class Public::GenresControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get public_genres_edit_url
    assert_response :success
  end
end
