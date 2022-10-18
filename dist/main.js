/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Fetces weather from the openweatherAPI 
async function getWeather(location="guwahati"){
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c92079914245461e8ba0aeefc926203a`);
    const weatherReport = await weatherResponse.json();

    console.log(weatherReport);
    addtoDom(weatherReport.weather[0].icon);    // addtoDOM with the weather icon id
    weatherDetailsfromJson(weatherReport);
}

// receives the response json from API and filters out the weather condition, temp, humidity
function weatherDetailsfromJson(weatherJson){
    const weatherCondition = weatherJson.weather[0].main;
    const weatherIcon = weatherJson.weather[0].icon;

    const feelsLikeInKelvin = weatherJson.main.feels_like;   //temperature is returned in Kelvin
    const feelsLike = convertToCelsius(feelsLikeInKelvin);
    const humidity =  weatherJson.main.humidity;
    const temperatureInKelvin = weatherJson.main.temp;      //temperature is returned in Kelvin
    const temperature = convertToCelsius(temperatureInKelvin);


    console.log({weatherCondition,feelsLike,humidity,temperature});

}

function convertToCelsius(temperatureInKelvin){
    return Math.round((temperatureInKelvin - 273.15)*100) /100;
}


// Update the IMG Field depending on the weather 
function addtoDom(imgSourceTag){
    const sourceLink = `http://openweathermap.org/img/wn/${imgSourceTag}@2x.png`;
    const imgDom = document.querySelector("img");
    imgDom.src = sourceLink;
}



getWeather();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSw2RkFBNkYsU0FBUztBQUN0Rzs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0EsNERBQTREO0FBQzVEOzs7QUFHQSxpQkFBaUIsZ0RBQWdEOztBQUVqRTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwyREFBMkQsYUFBYTtBQUN4RTtBQUNBO0FBQ0E7Ozs7QUFJQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZldGNlcyB3ZWF0aGVyIGZyb20gdGhlIG9wZW53ZWF0aGVyQVBJIFxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbj1cImd1d2FoYXRpXCIpe1xuICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPWM5MjA3OTkxNDI0NTQ2MWU4YmEwYWVlZmM5MjYyMDNhYCk7XG4gICAgY29uc3Qgd2VhdGhlclJlcG9ydCA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVwb3J0KTtcbiAgICBhZGR0b0RvbSh3ZWF0aGVyUmVwb3J0LndlYXRoZXJbMF0uaWNvbik7ICAgIC8vIGFkZHRvRE9NIHdpdGggdGhlIHdlYXRoZXIgaWNvbiBpZFxuICAgIHdlYXRoZXJEZXRhaWxzZnJvbUpzb24od2VhdGhlclJlcG9ydCk7XG59XG5cbi8vIHJlY2VpdmVzIHRoZSByZXNwb25zZSBqc29uIGZyb20gQVBJIGFuZCBmaWx0ZXJzIG91dCB0aGUgd2VhdGhlciBjb25kaXRpb24sIHRlbXAsIGh1bWlkaXR5XG5mdW5jdGlvbiB3ZWF0aGVyRGV0YWlsc2Zyb21Kc29uKHdlYXRoZXJKc29uKXtcbiAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gd2VhdGhlckpzb24ud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gd2VhdGhlckpzb24ud2VhdGhlclswXS5pY29uO1xuXG4gICAgY29uc3QgZmVlbHNMaWtlSW5LZWx2aW4gPSB3ZWF0aGVySnNvbi5tYWluLmZlZWxzX2xpa2U7ICAgLy90ZW1wZXJhdHVyZSBpcyByZXR1cm5lZCBpbiBLZWx2aW5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBjb252ZXJ0VG9DZWxzaXVzKGZlZWxzTGlrZUluS2VsdmluKTtcbiAgICBjb25zdCBodW1pZGl0eSA9ICB3ZWF0aGVySnNvbi5tYWluLmh1bWlkaXR5O1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlSW5LZWx2aW4gPSB3ZWF0aGVySnNvbi5tYWluLnRlbXA7ICAgICAgLy90ZW1wZXJhdHVyZSBpcyByZXR1cm5lZCBpbiBLZWx2aW5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGNvbnZlcnRUb0NlbHNpdXModGVtcGVyYXR1cmVJbktlbHZpbik7XG5cblxuICAgIGNvbnNvbGUubG9nKHt3ZWF0aGVyQ29uZGl0aW9uLGZlZWxzTGlrZSxodW1pZGl0eSx0ZW1wZXJhdHVyZX0pO1xuXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0NlbHNpdXModGVtcGVyYXR1cmVJbktlbHZpbil7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHRlbXBlcmF0dXJlSW5LZWx2aW4gLSAyNzMuMTUpKjEwMCkgLzEwMDtcbn1cblxuXG4vLyBVcGRhdGUgdGhlIElNRyBGaWVsZCBkZXBlbmRpbmcgb24gdGhlIHdlYXRoZXIgXG5mdW5jdGlvbiBhZGR0b0RvbShpbWdTb3VyY2VUYWcpe1xuICAgIGNvbnN0IHNvdXJjZUxpbmsgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpbWdTb3VyY2VUYWd9QDJ4LnBuZ2A7XG4gICAgY29uc3QgaW1nRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICBpbWdEb20uc3JjID0gc291cmNlTGluaztcbn1cblxuXG5cbmdldFdlYXRoZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=