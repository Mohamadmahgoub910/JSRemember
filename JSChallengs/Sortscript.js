var myArray = [
  { name: "Michael", age: "30", birthdate: "11/10/1989" },
  { name: "Mila", age: "32", birthdate: "10/1/1989" },
  { name: "Paul", age: "29", birthdate: "10/14/1990" },
  { name: "Dennis", age: "25", birthdate: "11/29/1993" },
  { name: "Tim", age: "27", birthdate: "3/12/1991" },
  { name: "Erik", age: "24", birthdate: "10/31/1995" },
];

$("th").on("click", function () {
  var col = $(this).data("column");
  var order = $(this).data("order");
  var text = $(this).html();
  text = text.substring(0, text.length - 1);
  console.log(col, order);
  if (order == "desc") {
    myArray = myArray.sort((a, b) => (a[col] > b[col] ? 1 : -1));
    $(this).data("order", "asc");
    text += "&#9660";
  } else {
    myArray = myArray.sort((a, b) => (a[col] < b[col] ? 1 : -1));
    $(this).data("order", "desc");
    text += "&#9650";
  }
  $(this).html(text);
  BuildTable(myArray);
});
/* $("#search").on("keyup", function () {
  var value = $(this).val();
  console.log(value);
  var data = searchTable(value, myArray);
  BuildTable(data);
}); */
BuildTable(myArray);
function searchTable(value, data) {
  var filteredData = [];
  for (var i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    var name = data[i].name.toLowerCase();
    if (name.includes(value)) {
      filteredData.push(data[i]);
    }
  }
  return filteredData;
}
function BuildTable(arr) {
  var myTable = document.getElementById("myTable");
  myTable.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var row = `<tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].birthdate}</td>
    </tr>`;
    myTable.innerHTML += row;
  }
}
