function createMenuItems(name, ingredients){
    const menugrid = document.createElement("div");
    menugrid.classList.add("menugrid")
    const foodName = document.createElement("h3");
    foodName.textContent = name;

    const images = document.createElement("img");
    images.src =  `../src/Images/${name.toLowerCase()}.png`;
    images.alt = `${name}`;
    const recipe = document.createElement("p");
    recipe.textContent = ingredients;
    menugrid.appendChild(foodName);
    foodName.appendChild(images);
    foodName.appendChild(recipe);

    return menugrid;
}

function showMenu(){
    const container = document.querySelector(".container");
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id","menuContainer");
    container.textContent = ""
    container.appendChild(menuContainer)
    menuContainer.appendChild(createMenuItems("Carne", "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli" ));
    menuContainer.appendChild(createMenuItems("Colorato", "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil" ));
    menuContainer.appendChild(createMenuItems("Crema", "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil" ));
    menuContainer.appendChild(createMenuItems("Disgustoso", "Tomato sauce, Bacon, Pineapple, Olives, Basil" ));
    menuContainer.appendChild(createMenuItems("Gamberi", "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"));
    menuContainer.appendChild(createMenuItems("Pepe", "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil" ));
    menuContainer.appendChild(createMenuItems("Pomodoro", "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli" ));
    menuContainer.appendChild(createMenuItems("Salsiccia", "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil" ));
}
export default showMenu;