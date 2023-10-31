//domTable.js

export default { //이름을 따로 안 정하면 디폴트 된 것을 쓰겠다...
	makeHead: function(titles=['아이디', '센터명']) {
		//thead>tr>th*n
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		titles.forEach(title => {
			let th = document.createElement('th');
			th.innerHTML = title;
			tr.append(th);
		})
		thead.append(tr);
		return thead;
	},
	makeBody: function(dataAry=[]) {
		let tbody = document.createElement('tbody');
		dataAry.forEach(item => {
			tbody.append(this.makeTr(item));
		})
		return tbody;
	},
	makeTr: function(center={}) {
		let tr = document.createElement('tr');
		for(let prop in center) {
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		return tr;
	}
}
