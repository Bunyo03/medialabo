let b = document.querySelector('button#calc') 
b.addEventListener('click',greeting)

function greeting() {
    let xmae = document.querySelector('input[name="left"]').value;
    let ymae = document.querySelector('input[name="right"]').value;

    let x = Math.floor(xmae);
    let y = Math.floor(ymae);

    answer.textContent = x + y;
}
