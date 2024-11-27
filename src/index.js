import {pageLoad} from "/home/vishnu/odin/jscript/restauraunt-page/src/homepage.js";
import {menuLoad}  from "./menu";
import {aboutLoad} from "./about";

pageLoad();
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
homeButton.addEventListener("click",pageLoad);
menuButton.addEventListener("click",menuLoad);
aboutButton.addEventListener("click",aboutLoad);

