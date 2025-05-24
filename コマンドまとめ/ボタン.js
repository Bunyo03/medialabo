let b = document.querySelector('button#print') 
  b.addEventListener('click',greeting)  //イベントハンドラとして登録 

  function greeting(){
    let i = document.querySelector('input[name="shimei"]') 
    let p = document.querySelector('p#message')
    p.textContent = '2件ヒットしました';
  }