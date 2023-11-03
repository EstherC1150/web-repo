//object2.js
const students = [
	{sno: '001', sname: "최해주", engScore: 80, mathScore: 85},
	{sno: '002', sname: "김채민", engScore: 82, mathScore: 83},
	{sno: '003', sname: "최다예", engScore: 84, mathScore: 88}
	
]

const member = new Member('홍길동', 20, 162.9); //안에 내용을 지워도 상관 없음
//member.showPage(document.getElementById('show')); --> 화면 보여질 dom위치
member.makeHtml(students);
member.showPage(document.getElementById('show'));

//member.makeHTML(students); --> makeTr활용
