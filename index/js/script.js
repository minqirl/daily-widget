function getWelcomeMessage() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Good morning!";
    } else if (currentHour < 18) {
        return "Good afternoon!";
    } else {
        return "Good night!";
    }
}
document.getElementById("welcome-message").textContent = getWelcomeMessage();
async function getWeather() {

const lat = 31.6904; 
const lon = -106.4245; // Ciudad Juárez

const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

try {

const response = await fetch(url);
const data = await response.json();

const temp = Math.round(data.current_weather.temperature);
const weatherCode = data.current_weather.weathercode;

document.getElementById("weather-temp").textContent = temp + "°";
document.getElementById("weather-desc").textContent = getWeatherDescription(weatherCode);

} catch (error) {
console.log("Weather error:", error);
}

}

function getWeatherDescription(code){

if(code === 0) return "Clear ☀";
if(code <= 3) return "Cloudy ☁";
if(code <= 48) return "Fog 🌫";
if(code <= 67) return "Rain 🌧";
if(code <= 77) return "Snow ❄";
if(code <= 99) return "Storm ⛈";

return "Weather";
}
getWeather();
setInterval(getWeather, 600000);
