
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (let i = 0; i < 2; i++) {
    let shop = data.results.shop[i];

    console.log("ーーーーーーーーーーーーーーーー");
    console.log("【店舗名】" + shop.name);
    console.log("【ジャンル】" + shop.genre.name);
    console.log("【サブジャンル】" + shop.sub_genre.name);
    console.log("【キャッチコピー】" + shop.catch);
    console.log("【アクセス】" + shop.access);
    console.log("【住所】" + shop.address);
    console.log("【予算】" + shop.budget.name);
    console.log("【営業時間】" + shop.open);
    console.log("【最寄駅】" + shop.station_name);
  }
}


let b = document.querySelector('button#sendRequest');
b.addEventListener('click', sendRequest);
  
  function printDom(data){

    let s = document.querySelector('select#omise');
	let idx = s.selectedIndex

	let os = s.querySelectorAll('option')
	let o = os.item(idx);


    let reset = document.querySelector('div#result');
  if (reset) {
    reset.remove();
  }


//ここから文字表示する
    let p = document.querySelector('p#message');
      p.textContent = '2件ヒットしました';
  
      //要素を作る
      let container = document.createElement('div');
      container.id='result'
    
      for (let i = 0; i < 10; i++) {

          let shop = data.results.shop[i];
  
          let h2_tenpo = document.createElement('h2');
          h2_tenpo.textContent = "【店舗名】" + shop.name;
          container.appendChild(h2_tenpo);
  
          let h4_genre = document.createElement('h4');
          h4_genre.textContent = "【ジャンル】" + shop.genre.name;
          container.appendChild(h4_genre);
  
          let p_subgenre = document.createElement('p');
          p_subgenre.textContent = "【サブジャンル】" + shop.sub_genre.name;
          container.appendChild(p_subgenre);
  
          let h3 = document.createElement('h3');
          h3.textContent = "【キャッチコピー】" + shop.catch;
          container.appendChild(h3);
  
          let p_access = document.createElement('p');
          p_access.textContent = "【アクセス】" + shop.access;
          container.appendChild(p_access);
  
          let p_address = document.createElement('p');
          p_address.textContent = "【住所】" + shop.address;
          container.appendChild(p_address);

          let h3_budget = document.createElement('h3');
          h3_budget.textContent = "【予算】" + shop.budget.name;
          container.appendChild(h3_budget);

          let p_open = document.createElement('p');
          p_open.textContent = "【営業時間】" + shop.open;
          container.appendChild(p_open);

          let p_station = document.createElement('p');
          p_station.textContent = "【最寄駅】" + shop.station_name;
          container.appendChild(p_station);
          
          let p_sen = document.createElement('p');
          p_station.textContent = "------------------------------------------------------------------";
          container.appendChild(p_sen);
    }
      
      p.insertAdjacentElement('afterend', container);
  }

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let s = document.querySelector('select#omise');
  let p = document.querySelector('p#message');

  let reset = document.querySelector('div#result');
  if (reset) {
    reset.remove();
  }

  if (s.value !== 'izakaya') {
    p.textContent = '「選択肢」を選んでください。';
    return
  }


  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G001.json'

  axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
let data = resp.data;

if (typeof data === 'string') {
  data = JSON.parse(data);
}
print(data);
printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
