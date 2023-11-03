//object4.js

const obj = { //상수 설정
    sno: 1001,
    sname: '홍길동',
    address: '대구 중구 100번지',
    friends: [
        {name: '김민수', phone: '010-1111'},
        {name: '최현수', phone: '010-2222'}
    ],
    hobbies: [
        '독서', '영화보기', '여행', '요리'
    ]
}

obj.addFriend = function(friend) {
    this.friends.push(friend);
}
obj.addFriend({name: '박현수', phone: '010-4444'});
obj.addFriend({name: '홍길동', phone: '010-3333'});


obj.pets = ['고양이', '멍멍이', '멧돼지'];
console.log(obj.pets[2]);
obj.pets[2] = '붕어';
console.log(obj.pets[2]);


console.log('이름: ',obj['sname']);
console.log('친구는 ', obj.friends.length, '명입니다');
console.log('첫번째 친구 이름: ', obj['friends'][0].name); //.붙이면 코테이션 없이
console.log('두번째 친구 연락처: ', obj['friends'][1]['phone']); //.안붙이면 '' 안에
obj['friends'][1]['phone'] = '010-3333'; //값이 바뀜
console.log('두번째 친구 연락처: ', obj.friends[1].phone); //.안붙이면 '' 안에

obj.hobbies.forEach(hobby => console.log(hobby));