import {addIconToDom} from './updateDom';


// Fetces weather from the openweatherAPI 
async function getWeather(location="guwahati"){
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c92079914245461e8ba0aeefc926203a`);
    const weatherReport = await weatherResponse.json();

    console.log(weatherReport);
    addIconToDom(weatherReport.weather[0].icon);    // addtoDOM with the weather icon id
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



getWeather();