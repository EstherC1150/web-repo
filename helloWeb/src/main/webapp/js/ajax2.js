//ajax2.js

import {table} from './ajaxModule.js';

//onclick 이벤트 등록 <button onclick="addMember()">
//member = {name: "hong", age: 20} member.name --> 속성
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = modMember;

function addMember(e) { //값을 넣어줄 수 있는...
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	
	const xhtp = new XMLHttpRequest();
	//xhtp.open('get', '../AddMemberServ.html?mid=M008&pass=9999&name=Kim&phone=010-9876-0987'); //경로 맞춰주기
	xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send(); //실제 실행이 된다 send()메소드가 있어야지
	xhtp.onload = function() {
		console.log(xhtp.responseText);
		let json = JSON.parse(xhtp.responseText);
		console.log(json);
		//사용자 입력값: retCode = OK => {vo: mid, pass, name, phone}
		//tr 생성해서 td생성, 화면출력
		//retCode = NG => alert('처리중 에러')
		
		if(json.retCode == 'OK') {
			let newM = table.makeTr(json.vo); //json.vo -> parse~ 에서 가지고 오는 값
			document.getElementById('list').innerHTML += newM;
		}else {
			alert("처리중 에러(회원아이디: " + json.vo.mid + ")");
		}
	
	}
}

function modMember(e) {
	//console.log('수정수정');
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	
	const xhtp = new XMLHttpRequest();
	xhtp.open('Get', '../ModMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText);
		console.log(result);
		//retCode : "OK/NG", vo : mid, pass, name, phone
		//데이터 영역의 tr 소집
		console.log(document.querySelectorAll('#list tr'));
		document.querySelectorAll('#list tr').forEach(tr => {
			console.log(tr.children);
			if(tr.children[0].innerHTML == result.vo.mid) {
				tr.children[1].innerHTML = result.vo.pass;
				tr.children[2].innerHTML = result.vo.name;
				tr.children[3].innerHTML = result.vo.phone;
			}
		});
	}
	
	
	
}
