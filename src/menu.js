import menu from "/home/vishnu/odin/jscript/restauraunt-page/src/pizza menu.jpg";
function menuLoad() {
const pizzaMenu = document.getElementById("content");
pizzaMenu.innerHTML = "";
const image = document.createElement("img");
image.src = menu;
pizzaMenu.appendChild(image);
}
export{ menuLoad};