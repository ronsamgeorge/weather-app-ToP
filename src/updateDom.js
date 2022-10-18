// Update the IMG Field depending on the weather 
function addIconToDom(imgSourceTag){
    const sourceLink = `http://openweathermap.org/img/wn/${imgSourceTag}@2x.png`;
    const imgDom = document.querySelector("img");
    imgDom.src = sourceLink;
}

export {addIconToDom};