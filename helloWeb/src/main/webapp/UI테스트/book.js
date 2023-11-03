

let xhtp = new XMLHttpRequest();
xhtp.open('get','../BookListServ.html?bookId=' + bookId + '&bookName=' + bookName + '&bookWriter=' + bookWriter + '&bookMake=' + bookMake + '&bookPrice=' + bookPrice);
xhtp.send();
xhtp.onload = loadJson;


function loadJson() {
	let result = JSON.parse(xhtp.responseText);
	console.log(result);
	
	document.getElementById('list').innerHTML += makeTr(result);
}

function makeTr(book = {}) { //tr 만들기
	let tr = "<tr>";
	for(let prop in book){
		tr += "<td>" + book[prop] + "</td>";
	}
	tr += "</tr>";
	return tr;
}