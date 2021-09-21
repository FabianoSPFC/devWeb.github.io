function searchStudents() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function filterTable() {

    let dropdown, table, rows, column, month, filter;
    dropdown = document.getElementById("listMonth");
    table = document.getElementById("tableMonth");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;
  
    for (let row of rows) { 
      column = row.getElementsByTagName("td");
      month = column[1] || null; 
      if (filter === "0" || !month || (filter === month.textContent)) {
        row.style.display = ""; 
      }
      else {
        row.style.display = "none";
      }
    }
  }