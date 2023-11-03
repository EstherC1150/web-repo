		//calendar => table
		//makeHead()
		function makeHead() {
			const day = ['일', '월', '화', '수', '목', '금', '토'];
			let dayStr = ''; 
			dayStr += "<table border = '1'>";
			dayStr += "<thead>";
			dayStr += "<tr>";
			
			day.forEach(obj => {dayStr += "<th>" + obj + "</th>"});
			dayStr += "</tr></thead>";
		
		//makeBody()
		//function makeBody() {
			dayStr += "<tbody><tr>";
			for(let i=1; i<32; i++) {
				dayStr += '<td align="center">' + i + '</td>'
				if(i % 7 == 0) {
					dayStr += '</tr><tr>'
				}
			}
			dayStr += '</tr></tbody></table>';
			return dayStr;
		}
		
		//makeCalendar()
		function makeCalendar() {
			document.getElementById('show').innerHTML = makeHead();
		}
		makeCalendar();
		//위 두 함수 조합하여 적절하게 써서
		//makeCalendar();