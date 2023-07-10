const navHead = document.getElementById("navbar");
const navList = document.getElementById("nav-list");
const navToggleBtn = document.getElementById("nav-toggle-btn");

let scrollPosition = window.screenY;
document.onscroll = () => {
  scrollPosition = window.scrollY;
  if (scrollPosition > 1) {
    navHead.classList.add("shadow-app", "bg-container");
  } else {
    navHead.classList.remove("shadow-app", "bg-container");
  }
};

// Toggle navbar
const toggleNavbar = (e) => {
  navList.classList.toggle("top-[-400px]");
  navList.classList.toggle("top-16");
  navList.classList.toggle("opacity-100")
};

navToggleBtn.addEventListener("click", toggleNavbar);
