const navHead = document.getElementById("navbar");
const navList = document.getElementById("nav-list");

let scrollPosition = window.scrollY;

function addNavShadow() {
  scrollPosition = window.scrollY;
  if (scrollPosition > 1) {
    navHead.classList.add("shadow-app", "bg-container");
  } else {
    navHead.classList.remove("shadow-app", "bg-container");
  }
}

//Event listeners
document.onscroll = addNavShadow
document.onload = addNavShadow

