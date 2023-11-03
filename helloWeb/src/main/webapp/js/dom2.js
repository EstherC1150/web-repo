//dom2.js


//#show>table>tbody>(tr>td:사과+td:1000+tr)->한세트
const fruits = [
	{name: "사과", price: 1000, farmer: '홍길동'},
	{name: "복숭아", price: 1500 ,farmer: '김민서'},
	{name: "포도", price: 2000, farmer: '최말숙'},
	{name: "수박", price: 3000, farmer: '김선중'}
]
let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.setAttribute('border', '1'); //<table border = '1'>

fruits.forEach(fruit => { //console.log(fruit)
	const tr = document.createElement('tr');
	
	for(let prop in fruit) {
		const td1 = document.createElement('td');
		td1.innerHTML = fruit[prop];
		tr.appendChild(td1);
	}
	tbody.appendChild(tr); //tbody에 tr을 하위요소로 등록
})
table.appendChild(tbody); //table에 tbody를 하위요소로 등록
document.querySelector('#show').appendChild(table);

