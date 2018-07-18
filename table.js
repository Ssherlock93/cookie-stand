function makeTable() {
  var body = document.getElementsByTagName('body');
  var table = document.createElement('table');
  var tableBody = document.createElement('tableBody');

  for (var i = 0; i < 12; i++) {
    var row = document.createElement('tr');

  for (var j = 0; j < 12; j++) {
    var cell = document.createElement('td');
    var cellText = document.createTextNode(i + j);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  table.appendChild(tableBody);
  body.appendChild(table);
  }
}
