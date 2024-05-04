const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todoArr = [];
const TODO_KEY = "todos";

document.addEventListener("DOMContentLoaded", restoreTodo);
todoForm.addEventListener("submit", handleTodo);
//기능을 5가지로 나눈다. restore(document 재실행시), create, store, delete, handle(create,store,delete모두 포함)

function handleTodo(event) {
  event.preventDefault();
  const todoObj = {
    text: todoInput.value,
    id: Date.now(),
  };

  createTodo(todoObj);
  storeTodo(todoObj);
  todoInput.value = "";
}

function restoreTodo() {
  const savedToDos = localStorage.getItem(TODO_KEY);
  if (savedToDos) {
    todoArr = JSON.parse(savedToDos);
    todoArr.forEach(createTodo);
  } else {
    todoArr = [];
  }
}

function createTodo(todo) {
  const li = document.createElement("li");
  li.innerHTML = todo.text;
  li.id = todo.id;
  const button = document.createElement("button");
  button.innerHTML = "X";

  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", function () {
    deleteTodo(li);
  });
}

function storeTodo(todo) {
  todoArr.push(todo);
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
}

function deleteTodo(li) {
  li.remove();
  todoArr = todoArr.filter((toDo) => toDo.id !== parseInt(li.id));
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
}
