//object.js
console.log("<----- object start ----->");

let obj1 = {
    name: 'Hong',
    age: 20
}

//주소참조 : 참조일 경우 같은 객체를 바라본다
let obj2 = obj1; //둘 중 무엇을 바꾸던 해당되는 주소값에 있는 객체 값을 참고하고 있기 때문
console.log(obj1);
obj2.age = 22;
console.log(obj1);

//복사 : 참조가 아닌 obj1의 값을 가지고 새로운 값을 생성
let obj3 = {...obj1}; //obj1을 펼쳐서 obj3이란 걸 만들겠다
obj3.age = 24;
console.log(obj1);
console.log(obj3);


//클래스
class Member {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    setWeight(weight) { //생성자 역할 하나의 속성
        this.weight = weight; //필드
    }
    getWeight() {
        return this.weight;
    }    
    showInfo() {
        return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`
    }
    //학생의 정보: 학생번호, 이름, 영어, 수학
    makeTr(student = {sno, sname, engScore, mathScore}) {
		//tr>td*4
        let html = '';
        html += '<tr>';
        html += '<td>' + student.sno + '</td>';
        html += '<td>' + student.sname + '</td>';
        html += '<td>' + student['engScore'] + '</td>';
        html += '<td>' + student.mathScore + '</td>';
        html += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
        html += '</tr>'
        return html;
		
	}
	makeHtml(studAry=[]) {
		//html 생성 => this.makeTr(stud);
		let table = '<table border = "1"><tbody>';
		//--> 이렇게도 쓸 수 있음 단지 함수 표현 방식의 차이일 뿐↓
		//table += studAry.reduce((acc, stud) => acc + this.makeTr(stud), '');
		
		let obj = this;
		table += studAry.reduce(function(acc, stud) {
			return acc + obj.makeTr(stud);
		}, '');
		table += '</tbody></table>';
		this.html = table;
	}
	showPage(dom) {
		//innerHTML 속성에 html 저장
		dom.innerHTML += this.html;
	}
}
const mem1 = new Member('홍길동', 20, 162.9); //인스턴스 생성
console.log(mem1.showInfo());
mem1.setWeight(52.5);
console.log('홍길동의 몸무게는 ', mem1.getWeight());



