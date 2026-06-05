import { score } from "./score.js";
import {
  saveToLocalStorage,
  getOneValueFromLocalStorage,
  getAllValueFromLocalStorage,
  removeOneValueFromLocalStorage,
  removeAllValueFromLocalStorage,
} from "./local_storage.js";

function startListener() {
  document.querySelector(".input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      checkUserValue();
    }
  });

  document.querySelector(".btn").addEventListener("click", checkUserValue);
  document
    .querySelector(".r-all-tasks")
    .addEventListener("click", removeAllFun);
}
function removeAllFun(){
  removeAllValueFromLocalStorage()
  if(document.querySelectorAll('.todo').length !== 0){
  document.querySelectorAll('.todo').forEach(todo => {
    todo.remove()
  })
  document.querySelectorAll(".done").forEach(done => {
    done.remove()
  })
  }else{
    showErrorMsg('No task to Remove!')
  }
  showDoneTasks()
}

function checkUserValue() {
  const userValue = document.querySelector(".input");

  if (userValue.value !== "" && userValue.value.length > 3) {
    saveToLocalStorage(userValue.value);
    createTodo(getOneValueFromLocalStorage());
    document.querySelector(".input").value = "";
  } else {
    document.querySelector(".input").focus();
    const textLength = document.querySelector(".input").value.length;
    document.querySelector(".input").setSelectionRange(textLength, textLength);
    showErrorMsg("Enter task not an empty and bigger then 3 chracter");
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
  removeOneValueFromLocalStorage(this.parentElement.childNodes[0].data);
  createElementFromLocalStorage();
  showDoneTasks();
}

function showDoneTasks() {
  document.querySelector(".done-length").textContent =
    `task you have done: ${document.querySelectorAll(".done").length}`;

  document.querySelector(".score").textContent = score(
    document.querySelectorAll(".done").length,
  );
}

function showErrorMsg(text) {
  const errorMsg = (document.createElement("h2").textContent = text);
  const rootElem = document.querySelector(".error-msg");
  rootElem.append(errorMsg);
  setTimeout(() => {
    rootElem.childNodes[rootElem.childNodes.length - 1].remove();
  }, 3000);
}

function createElementFromLocalStorage() {
  const len = document.querySelector(".todo-list").childNodes.length;
  const allLen = getAllValueFromLocalStorage().length;
  if (len !== allLen) {
    getAllValueFromLocalStorage().forEach((value) => {
      createTodo(value);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  startListener();
  showDoneTasks();
  createElementFromLocalStorage();
});
