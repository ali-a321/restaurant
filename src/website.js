import showHome from "./home";

//Helper function to create HTML elements

function create(element,content, className){
    const el = document.createElement(element);
    el.textContent = content;
    el.setAttribute("class",className);
    return el
}

function createTitle(){
    const header = document.createElement("div");
    header.classList.add("header")
    const restaurantName = create("div","", "title");
    
    const logoimg = document.createElement("img");
    logoimg.src = "../src/Images/maldini.webp";
    logoimg.alt = "Maldini Logo";
    logoimg.setAttribute("id","logoImg")
    restaurantName.appendChild(logoimg);
    
    header.appendChild(restaurantName);
    header.appendChild(createNav());
    return header
}

function createNav(){
    const navigationBar = document.createElement("nav");
    navigationBar.setAttribute("class", "nav")
    
    const home = create("div","Home","navi");
    home.setAttribute("id", "homebtn");
    

    const menu = create("div","Menu","navi");
    menu.setAttribute("id","menubtn");
   

    const contact = create("div","Contact", "navi");
    contact.setAttribute("id","contactbtn");

  
    const order = create("div","Order Now", "navi");
    order.setAttribute("id","orderbtn");
    
    navigationBar.appendChild(home);
    navigationBar.appendChild(menu);
    navigationBar.appendChild(contact);
    navigationBar.appendChild(order);


    return navigationBar
}

function createContainer(){
    const container = document.createElement("div");
    container.setAttribute("class","container");
    return container;
}

function websites(){
    const content = document.getElementById("content");
    content.appendChild(createTitle());
    content.appendChild(createContainer());
    showHome()
}

export default websites
