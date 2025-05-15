let b = document.querySelector('button#print');
b.addEventListener('click', greeting);

let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
let seikai = 0;

let result = document.querySelector('p#result');
let kaisuSpan = document.querySelector('span#kaisu');

function greeting() {
  let yoso = Number(document.querySelector('input[name="kazu"]').value);
  kaisu = kaisu+1;
  kaisuSpan.textContent = kaisu;

  if (seikai === 1 || kaisu > 3) {
    result.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
  } else if (yoso === kotae) {
    result.textContent = "正解です。おめでとう!";
    seikai = 1;
  } else if (kaisu < 4) {
    if (yoso > kotae) {
      result.textContent = "まちがい、答えはもっと小さいですよ";
    } else {
      result.textContent = "まちがい、答えはもっと大きいですよ";
    }
  } else {
    result.textContent = "まちがい、残念でした答えは " + kotae + " です。";
  }
}
