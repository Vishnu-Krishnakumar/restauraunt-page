import pizzaImage from "/home/vishnu/odin/jscript/restauraunt-page/src/pizza.jpg";
function pageLoad(){
const content = document.getElementById("content");
content.innerHTML = "";
const intro = document.createTextNode(
    "Introducing the \"Nowhere Special\" pizza: a culinary masterpiece of utter mediocrity. " +
    "Featuring a crust that's neither crispy nor soft, a sauce that tastes like it might have seen a tomato once, " +
    "and cheese that's just shy of melting, it’s the perfect blend of \"eh.\" " +
    "Toppings? Sure, but don’t expect them to cover the whole pizza. " +
    "It’s the kind of pie you’d only recommend to someone you don’t actually like. Bon appétit... or not." 
    );
const img = document.createElement("img");
img.src = pizzaImage;
const heading = document.createElement("h1");
heading.innerText = "Best mediocre pizza found nowhere!";
content.appendChild(img);
content.appendChild(heading);
content.appendChild(intro);
}
export{pageLoad};
