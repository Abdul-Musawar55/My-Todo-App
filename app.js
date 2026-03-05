let input = document.getElementById("todoInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// ✅ Initial render on page load
renderTodos();

// ✅ Add with button
button.addEventListener("click", addTodo);

// ✅ Add with Enter key
input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

// ✅ Add function (single logic)
function addTodo() {
  let task = input.value.trim();
  if (task === "") return;

  todos.push({
    text: task,
    completed: false
  });

  input.value = "";
  renderTodos();
}

// ✅ Single render function
function renderTodos() {
  list.innerHTML = "";

  todos.forEach(function (todo, index) {

    let li = document.createElement("li");
    li.innerText = todo.text;

    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }

    // Toggle complete
    li.addEventListener("click", function () {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.margin = "10px";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      todos.splice(index, 1);
      renderTodos();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // ✅ Save every time render runs
  localStorage.setItem("todos", JSON.stringify(todos));
}