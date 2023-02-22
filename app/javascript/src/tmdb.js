window.addEventListener('load', function(){
// 定数
// Discover
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// Images
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// Search
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

// 要素を取得
const main = document.getElementById('main')
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
  main.innerHTML = ''

  movies.forEach((movie) => {
    // オブジェクトから各変数に格納
    const {
      id,
      title,
      poster_path,
      vote_average,
      overview
    } = movie

    // topページ用
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    // MoveパネルをHTMLに埋め込む
    movieEl.innerHTML =
    `
     <div class="col-md-3 offset-md-1 d-inline-block text-truncate" style="max-width: 230px;">
      <img src="${IMG_PATH + poster_path}" alt="${title}" width="${200}" margin="${10}">
      <h5><a id="url"  href="/public/movies/${id}">${title}</a></h5>
     </div>
    `
    main.appendChild(movieEl)
  })

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
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