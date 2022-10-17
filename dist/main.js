/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Fetces weather from the openweatherAPI 
async function getWeather(location="guwahati"){
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c92079914245461e8ba0aeefc926203a`);
    const weatherReport = await weatherResponse.json();

    console.log(weatherReport.weather[0].icon);
    addtoDom(weatherReport.weather[0].icon);    // addtoDOM with the weather icon id
}

// receives the response json from API and filters out the weather condition, temp, humidity
function weatherDetailsfromJson(weatherJson){


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSw2RkFBNkYsU0FBUztBQUN0Rzs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBLDJEQUEyRCxhQUFhOztBQUV4RTtBQUNBO0FBQ0E7Ozs7QUFJQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZldGNlcyB3ZWF0aGVyIGZyb20gdGhlIG9wZW53ZWF0aGVyQVBJIFxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbj1cImd1d2FoYXRpXCIpe1xuICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPWM5MjA3OTkxNDI0NTQ2MWU4YmEwYWVlZmM5MjYyMDNhYCk7XG4gICAgY29uc3Qgd2VhdGhlclJlcG9ydCA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVwb3J0LndlYXRoZXJbMF0uaWNvbik7XG4gICAgYWRkdG9Eb20od2VhdGhlclJlcG9ydC53ZWF0aGVyWzBdLmljb24pOyAgICAvLyBhZGR0b0RPTSB3aXRoIHRoZSB3ZWF0aGVyIGljb24gaWRcbn1cblxuLy8gcmVjZWl2ZXMgdGhlIHJlc3BvbnNlIGpzb24gZnJvbSBBUEkgYW5kIGZpbHRlcnMgb3V0IHRoZSB3ZWF0aGVyIGNvbmRpdGlvbiwgdGVtcCwgaHVtaWRpdHlcbmZ1bmN0aW9uIHdlYXRoZXJEZXRhaWxzZnJvbUpzb24od2VhdGhlckpzb24pe1xuXG5cbn1cblxuXG4vLyBVcGRhdGUgdGhlIElNRyBGaWVsZCBkZXBlbmRpbmcgb24gdGhlIHdlYXRoZXIgXG5mdW5jdGlvbiBhZGR0b0RvbShpbWdTb3VyY2VUYWcpe1xuICAgIGNvbnN0IHNvdXJjZUxpbmsgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpbWdTb3VyY2VUYWd9QDJ4LnBuZ2A7XG5cbiAgICBjb25zdCBpbWdEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgIGltZ0RvbS5zcmMgPSBzb3VyY2VMaW5rO1xufVxuXG5cblxuZ2V0V2VhdGhlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==