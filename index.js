console.log("Weather app starting...");

const apiKey = process.env.API_KEY; 
const city = 'Ankara'; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('city').innerText = `City: ${data.name}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });