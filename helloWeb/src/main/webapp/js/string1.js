//string1.js

let str1 = "Hello"; //기본 데이터 타입
let str2 = new String("Hello"); //객체

console.log(typeof str1, typeof str2);

console.log(str1 == str2); //값만 비교 
console.log(str1 === str2); //값&타입 비교

console.log(str1.toUpperCase());

let result = "  공백 제거 합니다.    ".trim();
console.log(result, ', 제거 후 문자갯수: ', result.length);


//trim(), trimStart(), trimEnd()
//--> trim 공백 제거

//replace(), split(), slice(), substring()
//--> replace() : 문자를 찾아서 바꿀 문자로 적어주기
result = "Hello, World, Nice, World".replace(',', '.');
console.log(result);
result = "Hello, World, Nice, World".replace(/\s/g, '.'); //g : 글로벌이라는...
console.log(result);
//[]: 배열, {}: 객체, //: 객체(정규표현식) --> ex)/값/ 

//--> split() : 지정한 구분자를 이용하여 여러 개의 문자열(배열)로 나누기
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' '); 
console.log(words[3]); //단어 하나하나
// Expected output: "fox"
const chars = str.split(''); 
console.log(chars[8]); //글자 하나하나
// Expected output: "k"
const strCopy = str.split();
console.log(strCopy); 
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

//--> slice() : 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환, 원본 배열은 바뀌지 않음
//--> substring() : 인덱스번호 시작부터 끝번호 전까지만 가지고 오기

//toString(), indexOf(), lastIndexOf(), charAt(), includes()
//--> toString() : 문자열을 반환
//--> indexOf() : 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환, 찾을 수 없는 경우 -1을 반환
//--> lastIndexOf() : 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환
//--> charAt() : 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(sentence.charAt(4));
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"

//includes() : 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환

//concat()
//--> concat() : 두 개 이상의 배열을 병합, 기존 배열 변경X, 새 배열을 반환


