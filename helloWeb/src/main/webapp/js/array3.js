//array3.js
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

let pos = "Hello, World".indexOf(","); 
let pos2 = "Hello, World".lastIndexOf(","); 
console.log(pos); //5
console.log(pos2); //5

//배열도 같다
let names = ["콘", "무지", "라이언", "어피치"]
pos = names.indexOf("춘식이");
//indexOf or lastIndexOf --> 없는 값일 때 '-1' 반환
//indexOf(searchElement)
//indexOf(searchElement, fromIndex)
if(pos == -1) {
	console.log("없는 이름입니다.")
}else {
console.log("무지는 " + (pos + 1) +"번째 위치에 있습니다."); //2번째
}

//{name: "", age: 20}
let members = [
	{name: "김민식", age: 22},
	{name: "최다예", age: 20},
	{name: "이민식", age: 25}
];
let sik = "민식";
let cnt = 0;
members.forEach(member => {
	if(member.name.indexOf(sik) > -1) {
		cnt += 1;
	}
})
console.log("민식이란 이름은 " + cnt + "명 입니다.");




