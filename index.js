console.log("Weather app starting...");

const apiKey = 'ecdf2907b24699f6b5b6103942b35314'; 
const city = 'Ankara'; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Error:', error);
  });