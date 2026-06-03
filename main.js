function checkUserValue() {
  const userValue = document.querySelector(".input").value;
  if (userValue !== "" && userValue.length > 3) {
    createTodo(userValue);
    document.querySelector(".input").value = "";
  } else {
    showErrorMsg();
  }
}

function createTodo(value) {
  const todo = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const doneTask = document.createElement("input");

  todo.classList.add("todo");
  deleteBtn.classList.add("del-btn");
  deleteBtn.textContent = "Delete Task";
  todo.textContent = value;
  doneTask.type = "checkbox";
  doneTask.className = "done-task";
  deleteBtn.addEventListener("click", deleteTask);
  doneTask.addEventListener("change", doneTasks);

  todo.appendChild(deleteBtn);
  todo.appendChild(doneTask);
  addTask(todo);
}

function addTask(task) {
  document.querySelector(".todo-list").appendChild(task);
}

function doneTasks() {
  this.parentElement.classList.add("done");
  showDoneTasks();
}

function deleteTask() {
  this.parentElement.remove();
}

function showDoneTasks() {
  return document.querySelectorAll(".done").length;
}

function showErrorMsg() {
  const errorMsg = (document.createElement("h2").textContent =
    "Enter task not an empty and bigger then 3 chracter");
  const rootElem = document.querySelector(".errorMsg");
  rootElem.append(errorMsg);
  setTimeout(() => {
    rootElem.childNodes[rootElem.childNodes.length - 1].remove();
  }, 1000);
}
