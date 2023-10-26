//String2.js

const words = 	'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illum provident possimus? Dolores dignissimos iste corrupti adipisci. Beatae rem at ad pariatur quas veniam cumque molestiae praesentium. Amet, sapiente molestiae!';
//1.공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔출력
let bin = words.split(' ');
console.log(bin);
let each = '';
	//console.log(bin);
for(let val of bin) {
	if(val.length > 5) {
	console.log(val + " ");
	}
}

//2.생년월일 입력 => 남자/여자
function checkGender(ssn) {
	//950305 1678532, 9503051678532, 950305-1678532
	let so = ssn.replace(/\s/g, "");
	let so2 = ssn.replace(/\-/g, "");
	console.log(so);
	
	if(so.charAt(6) == "1" || so.charAt(6) == "3") {
		return console.log("남자");
	}else if(so.charAt(6) == "2" || so.charAt(6) == "4") {
		return console.log("여자");
	}else if(so2.charAt(6) == "1" || so2.charAt(6) == "3") {
		return console.log("남자");
	}else if(so2.charAt(6) == "2" || so2.charAt(6) == "4") {
		return console.log("여자");
	}
	//return '남자' || '여자';
}
checkGender("930511-1709923");

//3. 파일명과 파일의 확장자
let file = "d:/temp/sample/book.xls";
let fileName, fileExt;

let one = file.split('.');
console.log(one);
fileExt = one[1];
console.log('확장자는 : ',fileExt);

let two = one[0].split('/');
console.log(two);
fileName = two[two.length-1];
console.log('파일명은 : ',fileName);














