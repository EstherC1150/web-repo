//Map, Set

const map = new Map();
map.set("홍길동", 80);
map.set("김길동", 85);
map.set("김길동", 90); //똑같은 키 값을 담으면 변경시켜버린다

//map.delete("김길동"); //키 값을 넣어서 삭제

const refval = [12]; //배열값을 키에 해당되는 걸로 쓸 일이 거의 없다
map.set(refval, 88); //[12] 주소값이 다름
console.log(map.get(refval));

//홍길동의 값을 가져오려면 get을 쓴다
console.log(map.get("홍길동"));
for (let ent of map.entries()) { //키 : 값 반환 -- 배열값으로
	//console.log(ent);
	console.log('이름: ', ent[0], ', 점수: ', ent[1]);
}

map.forEach(function(a, b, c) { //a:value b:key c:map그자체 반납
	if(b == "홍길동") {
	console.log(a, b, c);
	}
})

//맵 <-> 배열
//배열 안에 키와 값으로 되어있는 배열이 또 선언이 되어있음
const ary = [['프로도', 3], ['라이언', 5], ['춘식이', 4]];
const fmap = new Map(ary); //Map(생성자:배열);

for(let ent of fmap.entries()) {
	console.log('키: ',ent[0], ', 값: ', ent[1]);
}

const entries = fmap.entries();
console.log(entries); //entries : MapIterator 타입

console.log(Array.from(fmap)); //맵 -> 배열로 변환

console.clear(); //위에 쓴걸 지워준다

//Set : 중복값 허용X
const set1 = new Set();
set1.add("라이언");
set1.add("프로도"); //문자값일 경우 동일하게 처리
set1.add(["어피치", 4]); //객체이거나 하면 : 보기에는 같은 값이지만 각각 다른 참조값을 가지고 있으니 허용
set1.add(["어피치", 4]);

console.log(set1.size);

set1.forEach(function(a, b, c) { //a : val, b : item, c : set자체
	console.log(a, b, c);
})

// Set <-> 배열
const setAry = ['라이언', '프로도', '무지', '무지'];
const set2 = new Set(setAry);
console.log(set2.size);

console.log(Array.from(set2)); //Set -> 배열
