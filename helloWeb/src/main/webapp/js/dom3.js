//dom3.js
//table>(thead>tr>th*5)+(tbody>tr>td*5)*건수
import table from './domTable.js';


let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=WP0mIf%2BR4VR0nuDoUbCZ763Nxm7k7kYjBtMkj4XDjgzEh0b%2FOFSYBgt6KNdVWK0aJKIoJVyXj0B9x28vGY78Tg%3D%3D';
let titles = ['센터id', '센터명', '의료원', '연락처', '위도', '경도'];


fetch(url)
	.then(resolve => resolve.json())
	.then(fetchCallback)
	.catch(err => console.log('error=> ', err));


//fetch 호출되는 함수 : callback 함수
function fetchCallback(result) {
	let rawData = result.data; //원래데이터 : 배열
	console.log(rawData);
	let sidoAry = []; //optAry에 sido 정보를 중복된 값제거
	rawData.forEach(item => {
		if (sidoAry.indexOf(item.sido) == -1) {
			sidoAry.push(item.sido);
		}
	})
	let sidoSel = document.querySelector('#sidoList')
	sidoAry.forEach(item => {
		let opt = document.createElement('option');
		opt.innerHTML = item;
		sidoSel.append(opt);
	})
	//select 태그에 change이벤트 발생
	sidoSel.addEventListener('change', changeCallback); //changeCallback() 이렇게 넣으면 안된다 change이벤트 등록하는 시점에 이미 다 함수 실행해서 안됨
	function changeCallback(e) {
		console.log(e.target.value);
		let searchSido = e.target.value;
		//선택된 시도 값에 맞는 센터명만 출력
		let filterAry = rawData.filter(center => center.sido == searchSido);
		genTable(filterAry);
	}

	//let filterAry = rawData.filter(center => center.sido =='대전광역시'); //해당 지역의 것을 가지고 온다 초기데이터 화면으로
	let filterAry = rawData.filter((center, idx) => idx < 10); //10개만 가져오기
	genTable(filterAry);
	//genTable(rawData); //초기데이터로 화면 출력 : 처음에 너무 많이 뿌려주지말고
}

//전체 출력	
function genTable(rawData = [], page = 1) {
	//전체 rawData로 출력

	//초기화
	//document.getElementById('show') : 'show'
	document.querySelector('#show').innerHTML = '';

	let thead = table.makeHead(titles); //헤더정보
	//let mapData = rawData.map(center => { //매핑정보 출력
	//	let newCenter = {
	//		id: center.id,
	//		centerName: center.centerName.replace('코로나19', ''),
	//		org: center.org,
	//		phoneNumber: center.phoneNumber,
	//		lat: center.lat,
	//		lng: center.lng
	//	}
	//	return newCenter;
	//});
	let reduceData = rawData.reduce((acc, center) => { //reduce사용하기
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''),
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng
		}
		acc.push(newCenter);
		return acc;
	},[]);
	console.log(reduceData);
	let tbody = table.makeBody(reduceData); //[{}, {}, {} ...{}]
	let tbl = document.createElement('table');
	tbl.setAttribute('border', '1');
	tbl.append(thead, tbody);
	document.querySelector('#show').append(tbl);

	//tr클릭이벤트 등록
	let targetTr = document.querySelectorAll('tbody tr');
	console.log(targetTr);
	targetTr.forEach(tr => { //querySelectorAll일 경우 배열처럼 forEach문이 가능
		tr.addEventListener('click', function(e) {
			console.log(tr);
			console.log(tr.children[4].innerHTML, tr.children[5].innerHTML);
			let lat = tr.children[4].innerHTML;
			let lng = tr.children[5].innerHTML;
			//location.href = 'daumapi.html?x=' + lat + '&y=' + lng;
			//새창에 열기
			window.open('daumapi.html?x=' + lat + '&y=' + lng);
		})
	})
}
