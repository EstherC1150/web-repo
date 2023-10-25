//object3.js

const member = { //하나의 인스턴스가 만들어짐, {중괄호} ==> 객체 선언 방식
	name: "홍길동",
	age: 20,
	height: 123.4,
	showInfo: function() {
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	},
	html: '',
	makeTr: function(student = {sno, sname, engScore, mathScore}) { //이렇게 선언해도 되고, 위처럼 해도됨
		let tr = '';
		tr += '<tr>';
		for(let prop in student) {
			tr += '<td>' + student[prop] + '</td>';
		}
		tr += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		tr += '</tr>'
		return tr;
	},
	makeHtml(studAry) {
		let table = '<table border = "1"><tbody>';
		let obj = this;
		table += studAry.reduce(function(acc, stud) {
			return acc + obj.makeTr(stud);
		}, '');
		table += '</tbody></table>';
		this.html = table;
	},
	showPage(dom) {
		dom.innerHTML += this.html;
	}
}


//객체의 속성 : for ..in
for(let prop in member) {
	//가져오는 방식이 두가지↓
	//member.name / member['age']
	//console.log(prop);
	//console.log(member[prop]); //각각의 값을 보고싶다면 이렇게
	//console.log(typeof member[prop]); //각각의 값을 보고싶다면 이렇게
	if(typeof member[prop] != 'function') {
		console.log(member[prop]);
	}
}
const students = [
	{sno: '001', sname: "최해주", engScore: 80, mathScore: 85},
	{sno: '002', sname: "김채민", engScore: 82, mathScore: 83},
	{sno: '003', sname: "최다예", engScore: 84, mathScore: 88}
	
]

member.makeHtml(students);
member.showPage(document.getElementById('show'));