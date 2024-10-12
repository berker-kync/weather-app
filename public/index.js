console.log("Weather app starting...");
const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather');

function getWeather(city) {
  fetch(`/api/weather?city=${encodeURIComponent(city)}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById('city').innerText = `City: ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
      } else {
        alert('City not found. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Could not retrieve weather data. Please try again.');
    });
}

getWeatherButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name');
  }
});