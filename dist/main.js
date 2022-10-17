/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("Hello World 4");

async function getWeather(location="guwahati"){
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c92079914245461e8ba0aeefc926203a`);
    const weatherReport = await weatherResponse.json();

    console.log(weatherReport);
}

getWeather();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0EsNkZBQTZGLFNBQVM7QUFDdEc7O0FBRUE7QUFDQTs7QUFFQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQgNFwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbj1cImd1d2FoYXRpXCIpe1xuICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPWM5MjA3OTkxNDI0NTQ2MWU4YmEwYWVlZmM5MjYyMDNhYCk7XG4gICAgY29uc3Qgd2VhdGhlclJlcG9ydCA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVwb3J0KTtcbn1cblxuZ2V0V2VhdGhlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==