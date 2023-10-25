//function4.js

//생성자 함수..Member
function Member(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo =function() {
        return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
    }
}
//makeTr 함수
function makeTr(member) {
    if(member.str == null) {
        alert("값을 입력하세요");
    }else {
    let str = "";
    str += '<tr>'
    str += '<td>' + member.name + '</td>';
    str += '<td>' + member.age + '</td>';
    str += '<td>' + member.height + '</td>';
    str += '<td>' + member.showInfo() + '</td>';
    str += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
    str += '</tr>';
    return str;
    }
}
//onclick은 아무곳에나 갖다붙여도 된다
document.getElementById('saveBtn').onclick = function(e) { //이벤트가 실행되면 대응되는 함수 : 이벤트 핸들러 --> 따라서 이벤트 변수 e를 꼭 받게 되어있다
    console.log(e.target);
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;

    const mem = new Member(name,age,height);
    let str = makeTr(mem); //<tr>...</tr>
    document.getElementById('list').innerHTML += str; //innerHTML속성
    //document.getElementById('list').innerHTML = str;
    //이렇게 써 버리면, 누적이 아니라 그 위를 덮어버려서 값이 계속 1개씩만 출력

    //입력초기화
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('height').value = "";
    document.getElementById('name').focus(); //focus함수
} 