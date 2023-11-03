//fetch1.js
import {table} from './ajaxModule.js';

fetch('../MemberListServ2')
.then((resolve) => {
	console.log(resolve);
	return resolve.json(); //json -> object : json문자열을 객체 타입으로 변화시켜주는 함수
})

.then((result) => {
	console.log(result);
	let titles = ["회원아이디", "비밀번호", "이름", "연락처"];
	let dataAry = result;
	
	result = table.makeTable(titles, dataAry);
	document.getElementById('show').innerHTML = result;
})

.catch((err) => {
	console.log('error => ', err);
})
