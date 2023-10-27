//array5.js


//sort()
const arr1 = ['펭수', '라이언', '어피치', '콘', '무지'];
arr1.sort(function(a, b) {
	if(a > b) { //a > b : 내림차순
		return -1;
	}else {
		return 1;
	}
});
console.log(arr1); //배열 자체를 변경


const arr2 = [4, 8, 1, 12, 23, 9];
arr2.sort(function(a, b) {
	if(a < b) {
		return -1; //오름차순
	}else {
		return 1;
	}
});
console.log(arr2); //배열 자체를 변경

const json = `
[{"id":1,"first_name":"Bar","email":"bbuist0@paypal.com"},
{"id":2,"first_name":"Quinn","email":"qspringtorpe1@soundcloud.com"},
{"id":8,"first_name":"Maris","email":"mtivers7@paginegialle.it"},
{"id":9,"first_name":"Matti","email":"mcorradengo8@amazon.co.jp"},
{"id":10,"first_name":"Pancho","email":"psheards9@symantec.com"}]
`; //json -> object.JSON.parse()사용 : 문자열을 자바스크립트의 객체 타입으로 바꾸겠습니다
let members = JSON.parse(json);
members.sort(function(a, b) {
	if(a.first_name < b.first_name) {
		return -1;
	}else {
		return 1;
	}
}).reverse(); //역순 정렬

console.log(members);