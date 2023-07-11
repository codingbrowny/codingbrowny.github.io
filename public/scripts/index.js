const navHead = document.getElementById("navbar");
const navList = document.getElementById("nav-list");
const navToggleBtn = document.getElementById("nav-toggle-btn");

let scrollPosition = window.scrollY;

function addNavShadow() {
  scrollPosition = window.scrollY;
  if (scrollPosition > 1) {
    navHead.classList.add("shadow-app", "bg-container");
  } else {
    navHead.classList.remove("shadow-app", "bg-container");
  }
}

// Navbar Toggle function
const toggleNavbar = (e) => {
  navList.classList.toggle("-top-96");
  navList.classList.toggle("top-16");
  navList.classList.toggle("opacity-100")
};

//Event listeners
navToggleBtn.onclick = toggleNavbar;
document.onscroll = addNavShadow
document.onload = addNavShadow

