const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

document.addEventListener("DOMContentLoaded", restoreUsername);
loginForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();
  greeting.innerHTML = `Hello, ${loginInput.value}`;
  localStorage.setItem("name", loginInput.value);
  loginForm.classList.toggle("hidden");
  greeting.classList.toggle("hidden");
}

function restoreUsername() {
  const username = localStorage.getItem("name");
  if (username !== null) {
    greeting.innerHTML = `Hello, ${username}`;
    loginForm.classList.toggle("hidden");
    greeting.classList.toggle("hidden");
  }
}
