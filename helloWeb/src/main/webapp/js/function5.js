//function5.js

let sum1 = 0;
[10, 20, 30].forEach(function (num) { //(item)은 변수, 알아서 쓰면 됨 num써도 됨
	sum1 += num; //consumer타입의 함수 : 매개값을 받아서 소진, 반환값은 없는 타입
})
console.log('forEach:', sum1);

sum1 = 0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary) { //function : 매개값을 소진, 반환값을 생성
	console.log(acc, item, idx);
	//return item;
	return acc + item; //누적값
}, 0);
console.log('reduce:', sum1);

function sum(a=0, b=0, ...args) { //parameter(매개변수)
	//... -> 펼침연산자
	console.log(args);
	result = a + b;
	args.forEach(num => result += num); //화살표 함수로 변형 function(num) {result += num});
	return result;
	//return a + b + args.reduce((acc, item) => acc + item);
}
console.log(sum(10, 20, 30, 40, 50, 60)); //arguments(매개값)


//reduce 연습
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;

max = numAry.reduce(function(acc, item, idx, ary) {
	console.log(acc, item, idx);
	if(acc < item) {
		return max = item;
	}else {
		return acc;
	}
});

console.log('최대값: ', max);











