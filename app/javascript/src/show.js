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
const form = document.getElementById('form')
const search = document.getElementById('search')

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

  movies.forEach((movie) => {
    // オブジェクトから各変数に格納
    const {
      id,
      title,
      poster_path,
      vote_average,
      overview
    } = movie

    //作品詳細用
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML =
    `
    <div class="col-md-4">
    <img src="${IMG_PATH + poster_path}" alt="${title}" width="${200}" margin="${10}">
    <div>みんなの評価</div>
    </div>

    <div class="col-md-4">
    <h3>${title}</h3>
    <table>
    <tr><th>公開日時</th><td>${title}</td></tr>
    <tr><th>作品紹介</th></tr>
    <tr><td>${overview}</td></tr>
    </table>
    </div>
    `
    show.appendChild(movieEl)
  })
}



  // 人気順にクラス分けをする
function getClassByRate(vote) {
  if(vote >= 8) {
    return 'green'
  } else if(vote >= 5) {
    return 'orangge'
  } else {
    return 'red'
  }
}

// formから検索できるようにする
form.addEventListener('submit', (e) => {
  // フォームのデフォルトの動きを禁止
  // ここではページのリダイレクトをキャンセルしている
  e.preventDefault()

  // 検索文字列取得
  const searchTerm = search.value

  if(search && searchTerm !== '') {
    // 検索文字列を元に検索をする
    getMovies(SEARCH_API + searchTerm)
    // 検索文字列を削除
    search.value = ''
  }else {
    // ページを再読み込み
    // 検索キーワードない状態で検索すると初期状態のデータを表示できる
    // Searchで検索した結果をクリアしたい時などに使える
    window.location.reload()
  }
})
})