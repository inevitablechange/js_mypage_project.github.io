const cityWeather = document.querySelector("#city-weather");

function currentPosition(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const WEATHER_API_KEY = "9230d99859dedd051854bd950ba7ed65";

  weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`;
  fetch(weather_url)
    .then((response) => response.json()) // Fetch 응답 객체를 받아옴
    .then((json) => {
      cityWeather.innerHTML = `${json.name}, ${json.weather[0].main}`;
    });
}

navigator.geolocation.getCurrentPosition(currentPosition);
