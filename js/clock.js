const todayDate = document.querySelector("#today-date");
const todayTime = document.querySelector("#today-time");

function currentTime() {
  const currentDate = new Date();

  const year = String(currentDate.getFullYear()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hour = String(currentDate.getHours()).padStart(2, "0");
  const mins = String(currentDate.getMinutes()).padStart(2, "0");
  const secs = String(currentDate.getSeconds()).padStart(2, "0");

  todayDate.innerHTML = `${year}-${month}-${day}`;
  todayTime.innerHTML = `${hour}:${mins}:${secs}`;
}

currentTime();
setInterval(currentTime, 1000);
