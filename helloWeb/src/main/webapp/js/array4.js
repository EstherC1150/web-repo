//array4.js

const json = `
[{"id":1,"first_name":"Bar","email":"bbuist0@paypal.com"},
{"id":2,"first_name":"Quinn","email":"qspringtorpe1@soundcloud.com"},
{"id":8,"first_name":"Maris","email":"mtivers7@paginegialle.it"},
{"id":9,"first_name":"Matti","email":"mcorradengo8@amazon.co.jp"},
{"id":10,"first_name":"Pancho","email":"psheards9@symantec.com"}]
`; //json -> object.JSON.parse()사용 : 문자열을 자바스크립트의 객체 타입으로 바꾸겠습니다
let members = JSON.parse(json);

//find()메소드
let result = members.find(function(a, b, c) { //a : 값, b : 인덱스, c : 배열 그 자체
	//console.log(a, b, c);
	if(a.id > 8) { //첫번째 true가 리턴되면 값을 담고 끝이된다
		return true;
	}
	return false;
	//return a.id > 5; // return말고 삼항연산자나 if를 써도 된다.
})
//filter()메소드
result = members.filter((a, b) => { //a : 값, b : 인덱스 , c : 배열 그 자체
	//console.log(a, b, c);
	//return a.id > 5;
	return b >= 1 && b < 3; //true 값을 반환
})

//reduce이용★★★★★★★
result = members.reduce((acc, item, idx) => {
	if(idx >=1 && idx < 3) {
		acc.push(item);
	}
	return acc;
}, []) //초기값을 배열로 쓸 거니까 []를 넣어준다


//some, every => true / false
result = members.some((member) => { //하나만 true되도 true
	console.log(member);
	return member.first_name.length > 5;
})
console.log(result);

result = members.every((member) => { //다 true가 되어야지 true
	console.log(member);
	return member.first_name.length > 5;
})


//map : A -> B
result = members.map(member => {
	let obj = {id: member.id, name: member.first_name, email: member.email, grade: 'C'};
	return obj;
})


console.log(result);