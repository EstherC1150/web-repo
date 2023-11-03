//function2.js
console.log('function2.js');

//Member member = new Member()
const member = {
    name: "홍길동",
    age: 18,
    height: 184.3, //속성, 필드
    showInfo: function() { //메소드
        //console.log(`이름은 ${this.name}이고 나이는${this.age}세 입니다.`); //this 객체 자신이 가지고 있는 속성
        return (`이름은 ${this.name}이고 나이는${this.age}세 입니다.`);
    }
}

const member1 = {
    name: "김길동",
    age: 19,
    height: 180.2, //속성, 필드
    showInfo: function() { //메소드
        //console.log(`이름은 ${this.name}이고 나이는${this.age}세 입니다.`); //this 객체 자신이 가지고 있는 속성
        return (`이름은 ${this.name}이고 나이는${this.age}세 입니다.`);
    }
}

const member2 = {
    name: "장길동",
    age: 21,
    height: 178.1, //속성, 필드
    showInfo: function() { //메소드
        //console.log(`이름은 ${this.name}이고 나이는${this.age}세 입니다.`); //this 객체 자신이 가지고 있는 속성
        return (`이름은 ${this.name}이고 나이는${this.age}세 입니다.`);
    }
}

const members = [member, member1, member2];


//실행
// member.showInfo();

//DOM: Document Object Model
let show = document.getElementById('show'); //getElement가 태그 / table>(thead>tr>tr*2) + (tbody>tr>td*2) : html 테이블 단축키
let str = "";
//str을 테이블 형태로 출력하기 table>tr>td*4)*3
    str += '<table border = 1>';
    str += '<tbody>';
    members.forEach(function(item) {
        str += makeTr(item);
    })
    str += '</tbody>';
    str += '</table>';

show.innerHTML = str;
console.log(str);

//console.log(show);
//show.innerHTML = "<ul><li>Apple</li><li>Banana</li></ul>"; //화면에 나타남
//show.innerText = "<ul><li>Apple</li><li>Banana</li></ul>"; //텍스트 모양으로만 화면에 나타남

function makeTr(member = {name, age, height, showInfo}) { //member={} --> member의 값이 오브젝트로 들어오겠습니다 : 안에 name~showInfo 안 적어도 됨
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '</tr>'
    return html;
}
//console.log(makeTr(member));
//console.log(str);