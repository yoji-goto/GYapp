class Public::MoviesController < ApplicationController
   require 'themoviedb-api'
  Tmdb::Api.key("a882fb831bd72865c87e32d59c65bdda")
  Tmdb::Api.language("ja")

  def index
  end

  def show
  end
end
