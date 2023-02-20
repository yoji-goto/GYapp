window.addEventListener('load', function(){
// 定数
// Discover
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
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
  // 画面初期化
  show.innerHTML = ''

 //urlのidから作品を取得
   const params = new URLSearchParams(window.location.search)
   const id = params.get('id')
   console.log(id)//null
   const showMovie = movies.find(id)
   console.log(showMovie)

    //作品詳細用
    const showEL = document.createElement('div')
    showEL.innerHTML =
    `
    <div class="col-md-4">
    <img src="${IMG_PATH + showMovie.poster_path}" alt="${showMovie.title}" width="${200}" margin="${10}">
    <div>みんなの評価</div>
    </div>

    <div class="col-md-4">
    <h3>${showMovie.title}</h3>
    <table>
    <tr><th>公開日時</th><td>${showMovie.title}</td></tr>
    <tr><th>作品紹介</th></tr>
    <tr><td>${showMovie.overview}</td></tr>
    </table>
    </div>
    `
    show.appendChild(showEL)
}
})