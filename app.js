let input = document.getElementById("todoInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("todoList");

let todos = [];

input.addEventListener("keydown", function(e) {

  if (e.key === "Enter") {

    let task = input.value;

    if (task === "") return;

    todos.push(task);

    renderTodos();

    input.value = "";
  }
   function renderTodos() {
        list.innerHTML = "";

        todos.forEach(function (todo, index){
            let li = document.createElement("li");
            li.innerText = todo;
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.style.margin = "20px";
            deleteBtn.style.padding = "10px 10px";
            deleteBtn.style.backgroundColor = "red";
            deleteBtn.style.color = "white";
            deleteBtn.style.borderRadius = "5px";
            deleteBtn.style.border = "none";
            deleteBtn.style.fontSize = "18px";

            deleteBtn.addEventListener("click", function(){
                todos.splice(index, 1);
                renderTodos();
            })

            li.appendChild(deleteBtn);

            list.appendChild(li);
        })
    }

});

button.addEventListener("click", function(){
    let task = input.value;

    if(task === "")return;

        todos.push(task);
        renderTodos();
        input.value = "";
    

    function renderTodos() {
        list.innerHTML = "";
        todos.forEach(function (todo){
            let li = document.createElement("li");
            li.innerText = todo;
            list.appendChild(li);
        })
    }
})