const footer = document.querySelector(".footer");
const copyrights = document.createElement("p");
const mentions = document.createElement("a");
const politique = document.createElement("a");

copyrights.textContent = "© Copyrights 2022 - Maera Contaret. Tous droits réservés.";
mentions.classList.add("mentions");
copyrights.classList.add("copyrights");

mentions.textContent = "Mentions légales";

footer.appendChild(copyrights);
footer.appendChild(mentions);