const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// buka / tutup menu
menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

// tutup menu saat scroll
window.addEventListener("scroll", () => {
navMenu.classList.remove("active");
});

// tutup menu saat klik link
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

// tutup menu saat klik di luar menu
document.addEventListener("click", function(e){

if(!navMenu.contains(e.target) && !menuToggle.contains(e.target)){
navMenu.classList.remove("active");
}

});