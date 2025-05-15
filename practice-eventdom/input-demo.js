function greeting(){
    let i = document.querySelector('input[name="shimei"]') 
    let p = document.querySelector('p#message')
    p.textContent = 'こんにちは、' + i.value + 'さん';
  }

  let b = document.querySelector('button#print') 
  b.addEventListener('click',greeting)