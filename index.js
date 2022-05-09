const hamburger = document.getElementById('humburger1');
const navbar = document.querySelector("#menu-Elements");

hamburger.addEventListener("click", openMenu);

function openMenu() { 
    console.log("clicled");
    navbar.style.display = "flex";
    // navbar.style.top = 0;
}


