//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function greeting(){
let p = document.createElement('p');
p.textContent = campus["address"]
let u = document.querySelector('h2#addr'); 
u.insertAdjacentElement('afterend',p)

for(let n of gakka){
let uu=document.createElement('ul');
	l = document.createElement('li');
	l.textContent = (n.name)
	u = document.querySelector('h2#dept'); 
	u.insertAdjacentElement('afterend',uu)
	u.insertAdjacentElement('afterend',l)
	uu.appendChild(l);  //uuをlに入れる
  }
}

  let show = document.querySelector('button#show') 
  show.addEventListener('click',greeting)  //イベントハンドラとして登録 