//dom1.js

const fruits = ['수박', '사과', '복숭아', '포도'];

//#show>ul>li:수박+li:사과+li:복숭아+li:포도
//createElement, appendChild, innerHTML속성

//ul생성
const ul = document.createElement('ul');
//li생성
const li = document.createElement('li'); 
fruits.forEach(fruit => { //간단하게 배열로 출력하기 위해서 forEach...
	const li = document.createElement('li'); //<li></li>
	li.innerHTML = fruit; //<li>수박</li> , <li>사과</li>, ...
	ul.appendChild(li);	//<ul><li>수박</li><li>사과</li>...</ul>
})
document.getElementById('show').appendChild(ul); //화면에 보이기



