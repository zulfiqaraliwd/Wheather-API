
const city= document.querySelector("#city");
const button = document.querySelector("#btn");
const container = document.querySelector("#container");

button.addEventListener("click", () => {
  const cityName = city.value;
  if (!cityName) {
    container.innerHTML = "<p>Please enter a valid city name.</p>";
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=642fb4999941485bb9151844242111&q=${cityName}&aqi=no`)
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = `
        <div id="card">
          <h2>${data.location.name}, ${data.location.country}</h2>
          <div id="temp">
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="Weather Icon">
          </div>
        </div>
      `;
      city.value = "";
    })
    .catch((err) => {
      console.log(err);
      container.innerHTML = "<p>Unable to fetch weather data. Please try again.</p>";
    });
});
