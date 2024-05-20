var todoarray = []; //empty array

function SaveMyTodo() {
    const title = document.getElementById("title").value;
    todoarray.push(title);
    localStorage.setItem("todos", todoarray.toString());
    document.getElementById("title").value = "";
    fetchAllTodos();
}

function fetchAllTodos() {
    const str = localStorage.getItem("todos"); //returns a string
    todoarray = str.split(","); //convert string to array
    var htmlstring = `
    <tr>
    <th>Sr.No</th>
    <th>Title</th>
    <th>Action</th>
    </tr>
    `;
    for (var i = 0; i < todoarray.length; i++) {
        htmlstring += `
        <tr>
        <td> ${i + 1}</td>
        <td> ${todoarray[i]} </td>
        <td>
            <button class="btn btn-warning" onclick="editTodo(${i})"> 
                Edit 
            </button>
            <button class="btn btn-danger" onclick="deleteTodo(${i})"> 
                Delete 
            </button>
        </td>
        <tr>
        `;
    }
    document.getElementById("todo-table").innerHTML=htmlstring;
}

function editTodo(index){
    const newValue=prompt("Do you want to change?",todoarray[index]);
    if(newValue != "" && newValue != undefined){
        todoarray[index] = newValue;
        localStorage.setItem("todos",todoarray.toString());
        fetchAllTodos();
    }
}

function deleteTodo(index){
    if(confirm("Do you want to delete?")){
        todoarray.splice(index,1);
        localStorage.setItem("todos",todoarray.toString());
        fetchAllTodos();
    }
}

function clearAllData(){
    localStorage.removeItem("todos");
    todoarray = [];
    document.getElementById("todo-table").innerHTML = "";
}