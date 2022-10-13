function createContact(){
   const contacts = document.createElement("div");
   contacts.setAttribute("class","contactinfo");
   contacts.textContent = "567 Little Seoul \r\n Los Santos, GTA, 90000 \r\n Tel: (555)-666-7777"; 
   const mapImg = document.createElement("img");
   mapImg.src = "../src/Images/map.webp";
   mapImg.alt = "Map";
   mapImg.setAttribute("id","mapImg")
   contacts.appendChild(mapImg);
  
   return contacts;
}

function showContact(){
    const container = document.querySelector(".container");
    container.textContent = ""
    container.appendChild(createContact());
}

export default showContact;