	//함수정의 방식 2가지
	//1. 함수선언 --> 전통적인 방식 function키워드 안에 함수 선언
	//1.으로 쓸 수도 있고, 2.로도 쓸 수 있다
	//함수 정의 구문 작성
	function myFunc(std, score = 60) { //score자체에 점수를 지정 밑 if문 넣는것보다 편리함
	    // if(score == undefined) { //점수 없을 시 0점으로
	    //     score = 0;
	    // }
	    console.log(`${std}의 점수는 ${score}`);
	    return score; //undefined return값이 없으면 undefined반환
	}
	//2. 함수표현식
	var myFunc = function myFunc(std, score = 60) { 
	    // if(score == undefined) { 
	    //     score = 0;
	    // }
	    console.log(`${std}의 점수는 ${score}`);
	    return score; 
	}
	
	// let myFunc = myFunc('홍길동');
	//함수 실행
	// myFunc('홍길동');
	console.log(myFunc("홍길동"));
