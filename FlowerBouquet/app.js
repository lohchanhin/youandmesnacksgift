let buttonMenu = document.querySelector("div.menuButton");

buttonMenu.addEventListener("click", e => {
    let menu = document.querySelector("div.slideMenu");
    if (menu.classList.value == "slideMenu") {
        menu.classList.toggle("trigger");
        console.log(menu.classList.value);
        menu.style.animation = "moveIn 1s ease forwards";
        buttonMenu.classList.toggle("trigger");        
    } else {
        menu.classList.toggle("trigger");
        console.log(menu.classList.value);
        menu.style.animation = "moveOut 1s ease forwards";
        buttonMenu.classList.toggle("trigger");        
    }
})