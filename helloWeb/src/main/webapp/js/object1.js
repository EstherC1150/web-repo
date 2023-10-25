//object1.js

//클래스 추가 메소드 작성 >> .prototype 속성에 지정
Member.prototype.setBloodType = function(bloodType) {
    this.bloodType = bloodType;
}
Member.prototype.getBloodType = function() {
    return this.bloodType;
}

const mem2 = new Member('홍길동', 22, 123.4);
mem2.setBloodType('AB');
console.log(mem2.getBloodType());

//javascript 클래스 추가 가능
String.prototype.truncate = function() {
    console.log(this);
    return this.substring(0,5);
}

let result = "HelloWorld".truncate();
console.log(result);