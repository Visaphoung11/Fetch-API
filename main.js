// const API_KEY = "5a695a768a529021468309f2271114a2";
// const cityName = "Phnom Penh";

// const images = [
//   "https://cdn.kimkim.com/files/a/content_articles/featured_photos/a415fb9b181d4ee46c5330ce6d05fa1b62e8d89c/medium-d2c97d1811035d4314bfc2139f00bf9b.jpg",
//   "https://static1.mclcm.net/iod/images/v2/69/citytheque/localite_101_5311/1200x600_80_300_000000x10x0.jpg",
//   "https://blog.takemetour.com/wp-content/uploads/2019/10/Royal-Palace-Phnom-Penh-1024x682.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/0/03/Wat_Phnom_Doun_Penh.jpg",
//   "https://static.ips-cambodia.com/wp-content/uploads/2023/01/Phnom-Penh-skyline-IPS-Cambodia.jpg", // Added 1 more image
// ];

// const weatherIcons = {
//   Clear: "https://img.icons8.com/ios/50/FFA500/sun.png",
//   Rain: "https://img.icons8.com/ios/50/FFA500/rain.png",
//   Clouds: "https://img.icons8.com/ios/50/FFA500/cloud.png",
//   Fog: "https://img.icons8.com/ios/50/FFA500/fog-day.png",
//   Mist: "https://img.icons8.com/ios/50/FFA500/fog-day.png",
//   Snow: "https://img.icons8.com/ios/50/FFA500/snow.png",
//   Windy: "https://img.icons8.com/ios/50/FFA500/windy-weather.png",
// };

// async function fetchWeather(city) {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
//   );
//   const data = await response.json();
//   return data.list; // Returns the 5-day forecast data
// }

// async function updateWeather() {
//   const container = document.getElementById("weather-container");
//   container.innerHTML = "";

//   try {
//     const forecastData = await fetchWeather(cityName);

//     // Get 5 unique days from the forecast (every 24 hours)
//     const dailyForecasts = [];
//     const usedDates = new Set();

//     for (const entry of forecastData) {
//       const date = entry.dt_txt.split(" ")[0]; // Extract only the date (YYYY-MM-DD)
//       if (!usedDates.has(date)) {
//         usedDates.add(date);
//         dailyForecasts.push(entry);
//       }
//       if (dailyForecasts.length === 5) break;
//     }

//     dailyForecasts.forEach((weatherData, index) => {
//       const temp = `${Math.round(weatherData.main.temp)}°C`;
//       const description = weatherData.weather[0].main;
//       const icon = weatherIcons[description] || weatherIcons["Clear"];
//       const date = new Date(weatherData.dt_txt).toLocaleDateString("en-US", {
//         weekday: "long",
//       });

//       const weatherCard = document.createElement("div");
//       weatherCard.classList.add(
//         "relative",
//         "w-64",
//         "h-96",
//         "rounded-3xl",
//         "overflow-hidden",
//         "shadow-lg"
//       );

//       weatherCard.innerHTML = `
//       <div class="w-full h-full bg-black opacity-50 absolute"></div>
//       <img src="${images[index]}" class="w-full h-full object-cover" style="opacity: 0.5;" />
//       <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
//         <img src="${icon}" class="w-12" />
//         <p class="text-xl font-semibold">${date}</p>
//         <p class="text-4xl font-bold">${temp}</p>
//         <p class="text-lg">${description}</p>
//         <p class="text-xl font-semibold">${cityName}</p>
//       </div>
//     `;

//       container.appendChild(weatherCard);
//     });
//   } catch (error) {
//     console.error(`Error fetching weather for ${cityName}:`, error);
//   }
// }

// updateWeather();

// const API_KEY = "5a695a768a529021468309f2271114a2";
// const cityName = "Phnom Penh";

// const images = [
//   "https://dev-mot-visit-cambodia.kesspay.io/uploads/0000/227/2024/09/05/phnom-penh-city.jpg",
//   "https://static1.mclcm.net/iod/images/v2/69/citytheque/localite_101_5311/1200x600_80_300_000000x10x0.jpg",
//   "https://blog.takemetour.com/wp-content/uploads/2019/10/Royal-Palace-Phnom-Penh-1024x682.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/0/03/Wat_Phnom_Doun_Penh.jpg",
//   "https://static.ips-cambodia.com/wp-content/uploads/2023/01/Phnom-Penh-skyline-IPS-Cambodia.jpg",
// ];

// const weatherIcons = {
//   Clear: "https://img.icons8.com/ios/50/FFA500/sun.png",
//   Rain: "https://img.icons8.com/ios/50/FFA500/rain.png",
//   Clouds: "https://img.icons8.com/ios/50/FFA500/cloud.png",
//   Fog: "https://img.icons8.com/ios/50/FFA500/fog-day.png",
//   Mist: "https://img.icons8.com/ios/50/FFA500/fog-day.png",
//   Snow: "https://img.icons8.com/ios/50/FFA500/snow.png",
//   Windy: "https://img.icons8.com/ios/50/FFA500/windy-weather.png",
// };

// async function fetchWeather(city) {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
//     );

//     if (!response.ok) throw new Error("Failed to fetch weather data");

//     const data = await response.json();
//     console.log("Weather API Data:", data); // Debugging log
//     return data.list;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     return [];
//   }
// }

// async function updateWeather() {
//   const container = document.getElementById("weather-container");

//   if (!container) {
//     console.error("weather-container not found in the DOM.");
//     return;
//   }

//   container.innerHTML = ""; // Clear previous data

//   const forecastData = await fetchWeather(cityName);
//   if (forecastData.length === 0) {
//     container.innerHTML =
//       "<p style='color: red;'>Failed to load weather data.</p>";
//     return;
//   }

//   const dailyForecasts = [];
//   const usedDates = new Set();

//   for (const entry of forecastData) {
//     const date = entry.dt_txt.split(" ")[0];
//     if (!usedDates.has(date)) {
//       usedDates.add(date);
//       dailyForecasts.push(entry);
//     }
//     if (dailyForecasts.length === 5) break;
//   }

//   dailyForecasts.forEach((weatherData, index) => {
//     const temp = `${Math.round(weatherData.main.temp)}°C`;
//     const description = weatherData.weather[0].main;
//     const icon = weatherIcons[description] || weatherIcons["Clear"];
//     const date = new Date(weatherData.dt_txt).toLocaleDateString("en-US", {
//       weekday: "long",
//     });

//     const weatherCard = document.createElement("div");
//     weatherCard.classList.add(
//       "relative",
//       "w-64",
//       "h-96",
//       "rounded-3xl",
//       "overflow-hidden",
//       "shadow-lg",
//       "bg-black",
//       "text-white",
//       "p-4",
//       "flex",
//       "flex-col",
//       "items-center",
//       "justify-center"
//     );

//     weatherCard.innerHTML = `
//       <div class="absolute inset-0 bg-black opacity-50"></div>
//       <img src="${images[index]}" class="w-full h-full object-cover absolute inset-0" style="opacity: 0.5;" />
//       <div class="relative z-10 flex flex-col items-center text-center">
//         <img src="${icon}" class="w-12 mb-2" />
//         <p class="text-xl font-semibold">${date}</p>
//         <p class="text-4xl font-bold">${temp}</p>
//         <p class="text-lg">${description}</p>
//         <p class="text-xl font-semibold">${cityName}</p>
//       </div>
//     `;

//     container.appendChild(weatherCard);
//   });
// }

// // Call function on window load
// window.onload = updateWeather;

const API_KEY = "5a695a768a529021468309f2271114a2";
const cityName = "Phnom Penh";

const images = [
  "https://dev-mot-visit-cambodia.kesspay.io/uploads/0000/227/2024/09/05/phnom-penh-city.jpg",
  "https://static1.mclcm.net/iod/images/v2/69/citytheque/localite_101_5311/1200x600_80_300_000000x10x0.jpg",
  "https://blog.takemetour.com/wp-content/uploads/2019/10/Royal-Palace-Phnom-Penh-1024x682.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/03/Wat_Phnom_Doun_Penh.jpg",
  "https://static.ips-cambodia.com/wp-content/uploads/2023/01/Phnom-Penh-skyline-IPS-Cambodia.jpg",
];

const weatherIcons = {
  Clear: "https://img.icons8.com/ios/100/FFA500/sun.png",
  Rain: "https://img.icons8.com/ios/100/FFA500/rain.png",
  Clouds: "https://img.icons8.com/ios/100/FFA500/cloud.png",
  Fog: "https://img.icons8.com/ios/100/FFA500/fog-day.png",
  Mist: "https://img.icons8.com/ios/100/FFA500/fog-day.png",
  Snow: "https://img.icons8.com/ios/100/FFA500/snow.png",
  Windy: "https://img.icons8.com/ios/100/FFA500/windy-weather.png",
};

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    return data.list;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return [];
  }
}

// Function to animate temperature numbers
function animateNumber(element, target) {
  let current = 0;
  const step = target / 50; // Smooth step animation
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = Math.round(current) + "°C";
  }, 30); // Animation speed
}

// Function to update weather UI
async function updateWeather() {
  const container = document.getElementById("weather-container");

  if (!container) {
    console.error("weather-container not found in the DOM.");
    return;
  }

  container.innerHTML = ""; // Clear previous data

  const forecastData = await fetchWeather(cityName);
  if (forecastData.length === 0) {
    container.innerHTML =
      "<p style='color: red;'>Failed to load weather data.</p>";
    return;
  }

  const dailyForecasts = [];
  const usedDates = new Set();

  for (const entry of forecastData) {
    const date = entry.dt_txt.split(" ")[0];
    if (!usedDates.has(date)) {
      usedDates.add(date);
      dailyForecasts.push(entry);
    }
    if (dailyForecasts.length === 5) break;
  }

  // Display actual weather data
  dailyForecasts.forEach((weatherData, index) => {
    const finalTemp = Math.round(weatherData.main.temp);
    const description = weatherData.weather[0].main;
    const icon = weatherIcons[description] || weatherIcons["Clear"];
    const date = new Date(weatherData.dt_txt).toLocaleDateString("en-US", {
      weekday: "long",
    });

    const weatherCard = document.createElement("div");
    weatherCard.classList.add(
      "relative",
      "w-64",
      "h-96",
      "rounded-3xl",
      "overflow-hidden",
      "shadow-lg",
      "bg-black",
      "text-white",
      "p-4",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "fade-in"
    );

    weatherCard.innerHTML = `
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <img src="${images[index]}" class="w-full h-full object-cover absolute inset-0" style="opacity: 0.5;" />
      <div class="relative z-10 flex flex-col items-center text-center">
        <img src="${icon}" class="w-12 mb-2" />
        <p class="text-xl font-semibold">${date}</p>
        <p class="text-4xl font-bold" id="temp-${index}">0°C</p>
        <p class="text-lg">${description}</p>
        <p class="text-xl font-semibold">${cityName}</p>
      </div>
    `;

    container.appendChild(weatherCard);

    // Animate the temperature from 0 to finalTemp
    const tempElement = document.getElementById(`temp-${index}`);
    animateNumber(tempElement, finalTemp);
  });
}

// Add CSS Animation
const style = document.createElement("style");
style.innerHTML = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
  }
`;
document.head.appendChild(style);

// Call function on window load
window.onload = updateWeather;
