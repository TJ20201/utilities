var recrow = 0;
function addListRow() {
 recrow += 1;
 var row = '<td contenteditable="true" onclick="this.textContent=``">Type here...</td>';
 var tdlist = document.getElementById('todoList');
 tdlist.innerHTML += `<tr id='todoRow${recrow}'>${row}${row}${row}<tr>`;
}
