import websites from "./website";
import showHome from "./home";
import showMenu from "./menu";
import showContact from "./contact";

websites();

const homebtn = document.getElementById("homebtn");
homebtn.addEventListener("click", () => {
    showHome();
})
const menubtn = document.getElementById("menubtn");
menubtn.addEventListener("click", () => {
    showMenu();
})
const contactbtn = document.getElementById("contactbtn");
contactbtn.addEventListener("click", () => {
    showContact();
})