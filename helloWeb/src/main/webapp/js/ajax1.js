//ajax1.js
//Asynchronous Javascript And XML:
//비동기 vs 동기
//동기 : 코드의 흐름대로 순차적으로
import {table} from './ajaxModule.js';

let friends = [];

//비동기 : 작업이 끝나는 순서대로 순서가 정해진다 --> 바로 실행하지 않고 코드를 한번 다 읽어낸 후 실행 스택에 던져놓고
setTimeout(function() {
	friends.push('홍길동');
}, 1000); //1000ms 후에 실행하세요

setTimeout(function() {
	friends.push('김길동');
}, 500); //1000ms 후에 실행하세요

setTimeout(function() {
	friends.push('최길동');
}, 2000); //1000ms 후에 실행하세요

/////////////////////////////////////

setTimeout(function() {
	friends.push('홍길동');
	
	setTimeout(function() {
		friends.push('김길동');
		
			setTimeout(function() {
				friends.push('김길동');
			}, 2000);
			
		}, 500);
		
}, 1000);

console.log(friends);

//동기
//friends.push('홍길동');
//friends.push('김길동');
//friends.push('최길동');
//console.log(friends);

//보류


let xhtp = new XMLHttpRequest();
xhtp.open('get','../MemberListServ2');
xhtp.send();
xhtp.onload = loadJson; //loadXML;

function loadJson() {
	console.log(xhtp.responseJSON);
	let result = JSON.parse(xhtp.responseText); //json문자열 => 오브젝트 타입으로 변환
	console.log(result);

	
	
}

function loadXML() { //onload : 이벤트
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record');
	
	console.log(records);
	console.log(records[0].children[2].innerHTML);
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	for(let record of records) {
		let obj = {
		mid: record.children[0].textContent, // mid
		pass: record.children[1].textContent, // pass
		name: record.children[2].textContent, // name
		phone: record.children[3].textContent // phone
		}
		dataAry.push(obj);
	}
	let result = table.makeTable(titles, dataAry);
	console.log(result);
	document.getElementById('show').innerHTML = result;
	
	
	//추가
	let newMember = {mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999"};
	//newMember 값을 활용해서 tbody = "list" 추가
	let tr = '<tr><td>' + newMember.mid + 
			'</td><td>' + newMember.pass + 
			'</td><td>' + newMember.name +
			'</td><td>' + newMember.phone + '</td></tr>';
	document.getElementById('list').innerHTML += tr;
}