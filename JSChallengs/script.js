var myArray = [
  { name: "Michael", age: "30", birthdate: "11/10/1989" },
  { name: "Mila", age: "32", birthdate: "10/1/1989" },
  { name: "Paul", age: "29", birthdate: "10/14/1990" },
  { name: "Dennis", age: "25", birthdate: "11/29/1993" },
  { name: "Tim", age: "27", birthdate: "3/12/1991" },
  { name: "Erik", age: "24", birthdate: "10/31/1995" },
];
function displayData(arr) {
  var myTable = document.getElementById("myTable");
  for (var i = 0; i < arr.length; i++) {
    var row = `<tr>
            <td>${arr[i].name}</td>
            <td>${arr[i].age}</td>
            <td>${arr[i].birthdate}</td>
        </tr>`;
    myTable.innerHTML += row;
  }
}
displayData(myArray);
