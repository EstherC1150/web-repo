//calendarObj.js
const today = new Date();

const calNovem = {
	makeHead() {
		const days = ['일', '월', '화', '수', '목', '금', '토'];
		return days.reduce((acc, day) => {
			return acc + '<th>' + day + '</th>';
		}, '<thead><tr>')
	},
	makeBody() {
		let tbody = '</tr></thead><tbody><tr>';
		for(let i=1; i<31; i++) {
				tbody += '<td align="center">' + i + '</td>'
			if(i % 7 == 0) {
				tbody += '</tr><tr>'
			}
		}
		tbody += '</tr></tbody></table>';
		return tbody;
	},
	novemberCal() {
		let thead = this.makeHead();
		let tbody = this.makeBody();
		let table = '<table border="1">' + thead + tbody + '</table>';
		document.getElementById('show').innerHTML = table;
	}
}
calNovem.novemberCal();

