function createHome(){

    const hometxt = document.createElement("div");
    hometxt.setAttribute("class","hometxt");
    hometxt.textContent = "The Best Authentic Italian Pizza in Los Santos, right in the heart of Little Seoul. \r\n Established in 1949. \r\n Drop by or Order Online! ";
    const locationimg = document.createElement("img");
    locationimg.src = "../src/Images/location.webp";
    locationimg.alt = "Location";
    locationimg.setAttribute("id","locationImg")
    hometxt.appendChild(locationimg);
    return hometxt;
}


function showHome(){
    const container = document.querySelector(".container");
    container.textContent = ""
    container.appendChild(createHome());
}

export default showHome;