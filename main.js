import { score } from "./score.js";

function startListener() {
  document.querySelector(".input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      checkUserValue();
    }
  });
  document.querySelector(".btn").addEventListener("click", checkUserValue);
}

function checkUserValue() {
  const userValue = document.querySelector(".input");

  if (userValue.value !== "" && userValue.value.length > 3) {
    createTodo(userValue.value);
    document.querySelector(".input").value = "";
  } else {
    document.querySelector(".input").focus();
    const textLength = document.querySelector(".input").value.length;
    document.querySelector(".input").setSelectionRange(textLength, textLength);
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
  document.querySelector(".input").focus();
}

function doneTasks() {
  if (this.parentElement.className === "todo done") {
    this.parentElement.classList.remove("done");
  } else {
    this.parentElement.classList.add("done");
  }
  showDoneTasks();
}

function deleteTask() {
  if (this.parentElement.className === "todo done") {
    this.parentElement.classList.remove("done");
    this.parentElement.remove();
  } else {
    this.parentElement.remove();
  }
  showDoneTasks();
}

function showDoneTasks() {
  document.querySelector(".done-length").textContent =
    `task you have done: ${document.querySelectorAll(".done").length}`;

  document.querySelector(".score").textContent = score(
    document.querySelectorAll(".done").length,
  );
}

function showErrorMsg() {
  const errorMsg = (document.createElement("h2").textContent =
    "Enter task not an empty and bigger then 3 chracter");
  const rootElem = document.querySelector(".error-msg");
  rootElem.append(errorMsg);
  setTimeout(() => {
    rootElem.childNodes[rootElem.childNodes.length - 1].remove();
  }, 3000);
}

window.addEventListener("DOMContentLoaded", () => {
  startListener();
  showDoneTasks();
});
