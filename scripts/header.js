const header = document.querySelector(".header");
const logo = document.createElement("a");
const nav = document.createElement("nav");
const menu = document.createElement("ul");

const linksArray = ["Accueil", "Profil", "Compétences", "Portfolio"];

linksArray.forEach((link) => {
    const list = document.createElement("li");
    const anchor = document.createElement("a");

    anchor.textContent = link;
    anchor.setAttribute("href", "#" + link);
    list.classList.add("list", "shadow-blue");

    menu.appendChild(list);
    list.appendChild(anchor);
});

logo.textContent = "MC";
logo.classList.add("logo", "shadow-blue");
nav.classList.add("nav");
menu.classList.add("menu");

window.addEventListener("scroll", () => {
    const {scrollTop, clientHeight} = document.documentElement;

    if (scrollTop > 570) {
        header.style.background = "#2727479f";
    }
})


header.appendChild(logo);
header.appendChild(nav);
nav.appendChild(menu);

