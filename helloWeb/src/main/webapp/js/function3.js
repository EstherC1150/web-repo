//function3.js

function Member(name, age, height) { //생성자 함수 : 관례적으로 M대문자로 쓰기
    console.log(this); //this는 제일 상위의 window객체**
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function() { //따로 기능이 없고 필드 값을 받아서 보여주는
        return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
    }
}

var myName = 'Hong'; //전역 변수
// const member = Member('홍길동', 20, 123.4); //this는 제일 상위 window객체
const member = new Member('홍길동', 20, 123.4); //여기서 this는 객체 자신
// console.log(member);
console.log(member.showInfo());
// window.alert("안녕하시오"); //제일 상위 window 객체

const members = [
    new Member('홍길동', 18, 124.3),
    new Member('고길동', 19, 130.2),
    new Member('박길동', 17, 142.18)
]

//함수: table 생성
function makeTable(memberAry=[]) {
    let str = '';
    str += '<table border = "1">';
    str += '<tbody>';
    members.forEach(function(item) {
        str += makeTr(item);
    })
    str += '</tbody>';
    str += '</table>';

    //화면의 <div id = 'show'></div>의 innerHTML 속성에...
    document.getElementById('show').innerHTML = str; //html의 div id가 show인 곳에 안에 넣어주겠습니다
    
    function makeTr(member) {
        let html = '';
        html += '<tr>';
        html += '<td>' + member.name + '</td>';
        html += '<td>' + member.age + '</td>';
        html += '<td>' + member.height + '</td>';
        html += '<td>' + member.showInfo() + '</td>';
        html += '</tr>'
        return html;
    } //end of makeTr
}//end of makeTalbe

makeTable(members);
makeTr(member); //makeTr은 makeTable 함수 안에서만 사용 가능
