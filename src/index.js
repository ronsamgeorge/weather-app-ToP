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