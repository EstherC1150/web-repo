//friend.js


//특정 정보만 밖으로 내보내고 싶다
//모듈화(캡슐화) --> export
//java --> public, private....
//javaScript --> 전부가 다 public 따라서 export 사용해 주면 된다
export const friend = {
	name: "Hong",
	phone: "010-1111-2222",
	address: "대구 중구 100",
	showInfo: function() {
		return `이름은 ${this.name}이고 연락처는 ${this.phone}`;
	}
}

export function friendInfo(friend) {
	return `${friend.name}, ${friend.phone}, ${friend.address}`;
}

//export 한꺼번 객체로 해서 export하기 ↓
//export { friend, friendInfo }