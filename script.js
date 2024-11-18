fetch('https://api.codetabs.com/v1/proxy/?quest=https://thpt-tpdbp-dienbien.edu.vn/tkb_2024_2025/11/tkb_2bclass_28.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
	var doctable = doc.querySelector('tbody');
    const tableHeader = doc.querySelector('tbody').rows[0];
    const test = doc.querySelector('tbody').rows[2];
	// var tRD = table.rows.length;
    for (let i = 0; i < tableHeader.cells.length; i++) {
		var row = document.getElementById("tableHead");
		var cell = row.insertCell(i);
		cell.innerHTML = tableHeader.cells[i].textContent;
	}
	console.log(test)
    const table = document.getElementById('myTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < 10; i++) {
		var data_need = doc.querySelector('tbody').rows[i];
        const cells = rows[i].getElementsByTagName('td');
		console.log("rows[i].getElementsByTagName('td');")
		console.log(i);
		if (i==1 || i==6) {
			for (let j = 0; j < 7; j++) {
				cells[j].innerHTML = data_need.cells[j].textContent;
				console.log("scence 1");
			}
		}
		else {
			for (let j = 0; j < 6; j++) {
				cells[j+1].innerHTML = data_need.cells[j].textContent;
				console.log("scence 2");
			}
		}
		// console.log(i);
    }
	console.log(test)
   })
  .catch(error => {
    console.error('Error fetching data:', error);
  });