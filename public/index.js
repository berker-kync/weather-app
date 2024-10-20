console.log("Weather app starting...");
const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather');

function getWeather(city) {
  const loadingSpinner = document.getElementById('loading-spinner');
  loadingSpinner.style.display = 'block'; 
  fetch(`/api/weather?city=${encodeURIComponent(city)}`)
    .then(response => response.json())
    .then(data => {
      loadingSpinner.style.display = 'none'; 
      if (data.cod === 200) {
        document.getElementById('city').innerText = `City: ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
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