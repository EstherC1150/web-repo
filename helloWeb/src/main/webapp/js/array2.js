//array2.js : mockaroo에서 받은 MOCK_DATA.json 파일의 데이터 활용

//` ` 써서 문자열로 넣기
const json = `
[{"id":1,"first_name":"Bar","email":"bbuist0@paypal.com"},
{"id":2,"first_name":"Quinn","email":"qspringtorpe1@soundcloud.com"},
{"id":3,"first_name":"Burtie","email":"btwydell2@uol.com.br"},
{"id":4,"first_name":"Krystle","email":"kwheway3@spiegel.de"},
{"id":5,"first_name":"Karol","email":"kkernan4@vinaora.com"},
{"id":6,"first_name":"Norbie","email":"nconcannon5@mac.com"},
{"id":7,"first_name":"Tedd","email":"tgoundrill6@ycombinator.com"},
{"id":8,"first_name":"Maris","email":"mtivers7@paginegialle.it"},
{"id":9,"first_name":"Matti","email":"mcorradengo8@amazon.co.jp"},
{"id":10,"first_name":"Pancho","email":"psheards9@symantec.com"}]
`; //json -> object.JSON.parse()사용 : 문자열을 자바스크립트의 객체 타입으로 바꾸겠습니다
let members = JSON.parse(json);
console.log(members);

let delMember = "Karol";
let yourinfo = {name: "daye", email: "yeye@email.com"}
members.forEach((member, idx) => {
	if(member.first_name == delMember) {
		members.splice(idx, 1, {id: member.id, first_name: yourinfo.name, email: yourinfo.email});
	}
})

let inpVal = prompt("이름과 이메일 입력하세요 예)홍길동, hong@email.com");
let sep = inpVal.split(',');
//console.log(sep.indexOf("da"));
let nid = members[members.length - 1].id + 1; //배열 마지막에 값 추가 --> length사용
let newMember = {id: nid, first_name: sep[0], email: sep[1].trim()};

//console.log(inpVal);
members.push(newMember);
console.log(members);


//배열의 table --> 보기 편함
const dupAry = [["라이언, 5"], ["어피치, 3"], ["콘, 2"], ["무지, 4"], ["프로도, 6"]];
console.table(dupAry);


