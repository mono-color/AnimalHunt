const weather = document.querySelector(
  ".header-column:last-child span:first-child"
);
const city = document.querySelector(
  ".header-column:last-child span:last-child"
);

const API_KEY = "4bf1c171b82a6da4e192f4b4a195cd40";

function onGeoOk(site) {
  console.log(site);
  const lat = site.coords.latitude;
  const lng = site.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log("You live in", lat, lng);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
