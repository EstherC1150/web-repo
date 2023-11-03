//ajaxModule.js

const table = {
	makeHead(titles = ['회원아이디', '비밀번호', '이름', '연락처']) {
		let headTag = "<thead><tr>";
		titles.forEach(title => {
			headTag += "<th>" + title + "</th>";
		})
		headTag += "</tr></thead>";
		return headTag;
	},
	makeBody(dataAry = [{mid, pass, name, phone}]) {
		let bodyTag = "<tbody id = 'list'>";
		dataAry.forEach(item => {
			bodyTag += this.makeTr(item); //입력값과 테이블값 tr이 달라서 그냥 이렇게 간단히 -> 어짜피 makeTr함수 실행
		})
		bodyTag += "</tbody>";
		return bodyTag;
	},
	makeTable(titleAry, dataAry) {
		let tableTag = "<table border = '1'>"; //이벤트 핸들러
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
		tableTag += "</table>";
		return tableTag;
	},
	makeTr(member = {}) { //tr 만들기
		let tr = "<tr onclick='showInfo(event,this)'>";
		for(let prop in member) {
			tr += "<td>" + member[prop] + "</td>";
		}
		tr += "</tr>";
		return tr;
	}
}

export {table};