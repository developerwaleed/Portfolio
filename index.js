const hamburger = document.getElementById('humburger');
const closeBtn = document.getElementById('close');
const navbar = document.querySelector("#menu-Elements");
const menuItems = document.querySelectorAll(".menu-item");

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", close);
menuItems.forEach(menuItem => menuItem.addEventListener('click', close))

function openMenu() { 
    navbar.style.display = "flex";
    hamburger.style.display = "none";
    closeBtn.style.display = "flex";
}

function close() {
    navbar.style.display = "none";
    hamburger.style.display = "flex";
    closeBtn.style.display = "none";

}
