const footer = document.querySelector(".footer");
const copyrights = document.createElement("p");
const contacts = document.createElement("div");
const emailBox = document.createElement("a");
const emailIcone = document.createElement("img");
const emailText = document.createElement("p");
const linkedinBox = document.createElement("a");
const linkedinIcone = document.createElement("img");
const linkedinText = document.createElement("p");
const githubBox = document.createElement("a");
const githubIcone = document.createElement("img");
const githubText = document.createElement("p");

copyrights.textContent = "© Copyrights 2022 - Maera Contaret. Tous droits réservés.";
copyrights.classList.add("copyrights");

contacts.style.display = "flex";
contacts.style.justifyContent = "space-around";
contacts.style.marginBottom = "30px";

emailIcone.setAttribute("src", "../assets/icons/email.png");
emailIcone.setAttribute("alt", "Icone Email");
linkedinIcone.setAttribute("src", "../assets/icons/linkedin-icon.png");
linkedinIcone.setAttribute("alt", "Icone Linkedin");
githubIcone.setAttribute("src", "../assets/icons/github.png");
githubIcone.setAttribute("alt", "Icone Github");
emailBox.setAttribute("href", "mailto:maera.contaret@outlook.fr");
emailBox.setAttribute("target", "_blank");
linkedinBox.setAttribute("href", "https://www.linkedin.com/in/maera-contaret-5ab94a221/");
linkedinBox.setAttribute("target", "_blank");
githubBox.setAttribute("href", "https://github.com/MaeraC");
githubBox.setAttribute("target", "_blank");

emailText.textContent = "Envoyer un e-mail";
linkedinText.textContent = "Visiter mon Linkedin";
githubText.textContent = "Visiter mon GitHub";

footer.appendChild(contacts);
contacts.appendChild(emailBox);
contacts.appendChild(linkedinBox);
contacts.appendChild(githubBox);
emailBox.appendChild(emailIcone);
emailBox.appendChild(emailText);
linkedinBox.appendChild(linkedinIcone);
linkedinBox.appendChild(linkedinText);
githubBox.appendChild(githubIcone);
githubBox.appendChild(githubText);
footer.appendChild(copyrights);