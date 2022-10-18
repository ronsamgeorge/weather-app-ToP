// Update the IMG Field depending on the weather 
function addIconToDom(imgSourceTag){
    const sourceLink = `http://openweathermap.org/img/wn/${imgSourceTag}@2x.png`;
    const imgDom = document.querySelector("img");
    imgDom.src = sourceLink;
}


// add Weather Detail to Dom
function addTempToDom(temperatue){
    const temperatureDiv = document.createElement("div");
    temperatureDiv.textContent = `${temperatue} \xB0 C`;

    document.querySelector(".main-container").appendChild(temperatureDiv);
}

export {addIconToDom, addTempToDom};