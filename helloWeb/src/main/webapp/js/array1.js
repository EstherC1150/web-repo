//array1.js

const arr1 = []
//javaScript에서는 다른 타입이 와도 배열에 다 담을 수 있다
//push --> 배열 마지막에 추가
arr1.push(10);
arr1.push('ten');
arr1.push({name: "Hong", age: 20});

//unshift --> 배열 제일 앞쪽에 추가
arr1.unshift(20);


console.log('크기: ', arr1.length); //배열의 크기
//arr1.length = 5; //크기를 지정할 수도 있음 : undefined

arr1.pop(); //배열제거 뒤에서부터 / arr1.shift() => 배열제거 앞에서부터

//splice(위치, 크기, 대체할값)
arr1.splice(1, 2, 30, 40); //추가, 삭제, 수정 : 매개값으로 조정

for(let ary of arr1) { //배열 for문으로 돌리기 / in은 인덱스 출력
	console.log(ary);
}
