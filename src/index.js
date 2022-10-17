console.log("Hello World 4");

async function getWeather(location="guwahati"){
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c92079914245461e8ba0aeefc926203a`);
    const weatherReport = await weatherResponse.json();

    console.log(weatherReport);
}

getWeather();