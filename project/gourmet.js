
function print(data) {
  let shopList = data.results.shop;
  let max = Math.min(shopList.length, 10);
  for (let i = 0; i < max; i++) {
    let shop = shopList[i];

    console.log("ーーーーーーーーーーーーーーーー");
    console.log("【店舗名】" + shop.name);
    console.log("【ジャンル】" + shop.genre.name);
    console.log("【サブジャンル】" + (shop.sub_genre ? shop.sub_genre.name : "なし"));
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

function printDom(data) {
  let s = document.querySelector('select#omise');
  let idx = s.selectedIndex;
  let os = s.querySelectorAll('option');
  let o = os.item(idx);

  let reset = document.querySelector('div#result');
  if (reset) {
    reset.remove();
  }

  let p = document.querySelector('p#message');
  let container = document.createElement('div');
  container.id = 'result';

  let shopList = data.results.shop;
  let max = Math.min(shopList.length, 10);
  for (let i = 0; i < max; i++) {
    let shop = shopList[i];

    let h2_tenpo = document.createElement('h2');
    h2_tenpo.textContent = "【店舗名】" + shop.name;
    container.appendChild(h2_tenpo);

    let h4_genre = document.createElement('h4');
    h4_genre.textContent = "【ジャンル】" + shop.genre.name;
    container.appendChild(h4_genre);

    let p_subgenre = document.createElement('p');
    p_subgenre.textContent = "【サブジャンル】" + (shop.sub_genre ? shop.sub_genre.name : "なし");
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
    p_sen.textContent = "------------------------------------------------------------------";
    container.appendChild(p_sen);
  }

  p.textContent = shopList.length + '件ヒットしました';
  p.insertAdjacentElement('afterend', container);
}

function sendRequest() {
  let s = document.querySelector('select#omise');
  let id = s.selectedIndex;
  let os = s.querySelectorAll('option');
  let o = os.item(id);

  if (id === 0) {
    let c = document.querySelector('div#result');
    if (c) c.remove();

    let a = document.querySelector('p#message');
    a.textContent = '検索キーワードを選択してください';
  } else {
    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + o.value + '.json';
    axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);
  }
}

function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  print(data);
  printDom(data);
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}
