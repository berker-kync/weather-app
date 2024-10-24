console.log("Weather app starting...");
const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather');
const toggleUnitButton = document.getElementById('toggle-unit');
let currentUnit = 'metric';

function getWeather(city) {
  const loadingSpinner = document.getElementById('loading-spinner');
  loadingSpinner.style.display = 'block';

  const unitParam = currentUnit === 'metric' ? 'metric' : 'imperial';
  const unitSymbol = currentUnit === 'metric' ? '°C' : '°F';

  fetch(`/api/weather?city=${encodeURIComponent(city)}&units=${unitParam}`)
    .then(response => response.json())
    .then(data => {
      loadingSpinner.style.display = 'none';
      if (data.cod === 200) {
        document.getElementById('city').innerText = `City: ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}${unitSymbol}`;
        document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
      } else {
        alert('City not found. Please try again.');
      }
    })
    .catch(error => {
      loadingSpinner.style.display = 'none';
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

toggleUnitButton.addEventListener('click', () => {
  currentUnit = currentUnit === 'metric' ? 'imperial' : 'metric';
  toggleUnitButton.innerText = currentUnit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius';

  const city = cityInput.value;
  if (city) {
    getWeather(city);
  }
});

function clearWeatherInfo() {
  document.getElementById('city').innerText = '';
  document.getElementById('temperature').innerText = '';
  document.getElementById('description').innerText = '';
}

getWeatherButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    clearWeatherInfo();
    getWeather(city);
  } else {
    alert('Please enter a city name');
  }
});