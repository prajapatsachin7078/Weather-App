import { apiKey } from "./config.js";
document.getElementById('location-form').addEventListener('submit', getWeather);

function getWeather(e) {
    e.preventDefault();
    let input = document.getElementById('location-input').value;
    fetchData(input);
}

function displayData(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('countryCode').textContent = data.sys.country;
    document.getElementById('mainTemp').textContent = data.main.temp;
    document.getElementById('minTemp').textContent = data.main.temp_min;
    document.getElementById('maxTemp').textContent = data.main.temp_max;
    document.getElementById('visibility').textContent = data.visibility;
    document.getElementById('windSpeed').textContent = data.wind.speed;
}

async function fetchData(city) {
    // let apiKey = '16fac8d9823f24881d5efad3317e7621';
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        
        console.error('Error fetching data:', error);
    }
}

// Preload data for a default city
fetchData("New Delhi");
