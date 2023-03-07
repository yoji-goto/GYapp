window.addEventListener('turbolinks:load', function(){
// 定数
// Discover
const API_URL = 'https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&api_key=a882fb831bd72865c87e32d59c65bdda&page=1&language=ja-JP'
// Images
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// Search
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

// 要素を取得
const show = document.getElementById('show')

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

 //urlのidから作品を取得
   const path = window.location.pathname.split('/')
   const id = path[3]
   const showMovie = movies.find((v) => v.id == id )

    //作品詳細用
    const showEL = document.createElement('div')
    showEL.className = 'row'
    showEL.innerHTML =
    `
    <div class="col-md-4">
    <img src="${IMG_PATH + showMovie.poster_path}" alt="${showMovie.title}" width="${200}" margin="${10}">
    <div>みんなの評価</div>
    <h2>${showMovie.vote_average}/10</h2>
    </div>

    <div class="col-md-8">
    <h2>${showMovie.title}</h2>
    <table>
    <tr><th>公開日時</th><td> 0000/00/00</td></tr>
    <tr><th>作品紹介</th></tr>
    </table>
    <div>${showMovie.overview}</div>
    </div>
    `
    show.appendChild(showEL)
}
})