window.addEventListener('load', function(){
// 定数
// Discover
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&language=ja-JP'
// Images
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// Search
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

// 要素を取得
const movie = document.getElementById('movie')

// 要素を取得
// 映画情報を取得
getMovies(API_URL)

// async/awaitで非同期処理
async function getMovies(url) {
  // APIヘGETリクエスト
/*global fetch*/
  const res = await fetch(url)
  // 取得したデータをJSON形式で取得
  const data = await res.json()
  /*global data*/
  showMovies(data.results)
}
function showMovies(movies) {

 //movie_idから作品を取得
 /*global movie_id*/
   const id = movie_id
   const Movie = movies.find((v) => v.id == id )

    //作品詳細用
    const movieEL = document.createElement('div')
    movieEL.className = 'row'
    movieEL.innerHTML =
    `
    <div class="col-md-3">
    <img src="${IMG_PATH + Movie.poster_path}" alt="${Movie.title}" width="${200}" margin="${10}">
    </div>
    <table class="col-md-3>
    <tr><th>作品名</th><td>${Movie.title}</td></tr>
    <tr><th>みんなの評価</th><td>${Movie.vote_average}/10</td></tr>
    </table>
    `
    movie.appendChild(movieEL)
}
})