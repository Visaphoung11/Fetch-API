const apiKey = "5a695a768a529021468309f2271114a2"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("city-input").value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      const weatherInfo = document.getElementById("weather-info");
      weatherInfo.innerHTML = `
                <h3 class="text-xl font-semibold">${data.name}, ${data.sys.country}</h3>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="mx-auto mt-3 w-20">
                <p class="text-lg font-bold">${data.main.temp}°C</p>
                <p class="capitalize">${data.weather[0].description}</p>
            `;
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}
