$("#add-test").on("click", function () {});

$("#test-result").on("keyup", function () {});

$("#test-name").on("change", function () {});

$("#create-test").on("click", function () {});

var tests = [
  { name: "Distillation 50%", id: "1", result: "43" },
  { name: "Flash Point", id: "2", result: "61" },
  { name: "Water By Karl Fischer", id: "3", result: "24" },
];

for (var i in tests) {
  addRow(tests[i]);
}

function addRow(obj) {
  var row = `<tr scope="row" class="test-row-${obj.id}">
                   <td>${obj.name}</td>
                   <td>${obj.result}</td>
                   <td>
                           <button class="btn btn-sm btn-danger">Delete</button>
                           <button class="btn btn-sm btn-info disabled">Save</button>
                           
                           <button class="btn btn-sm btn-danger hidden">Cancel</button>
                           <button class="btn btn-sm btn-primary hidden">Confirm</button>
                           
                   </td>
               </tr>`;
  $("#tests-table").append(row);
}

function editResult() {}

function saveUpdate() {}

function deleteTest() {}

function cancelDeletion() {}

function confirmDeletion() {}
