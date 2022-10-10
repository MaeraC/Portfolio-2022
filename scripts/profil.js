const profile = document.querySelector(".profile");
const title = document.createElement("h1");
const contents = document.createElement("div");
const img = document.createElement("img");
const text = document.createElement("p");

title.classList.add("title");
contents.classList.add("contents");

img.setAttribute("src", "assets/IMG_0139.jpg");
img.setAttribute("alt", "Portrait de Maera Contaret");

title.textContent = "qui suis-je ?";

text.innerHTML = "Hello ! Je m’appelle Maera Contaret, développeuse web en plein apprentissage." + "<br></br>" +
"Passionnée par les métiers du web depuis de nombreuses années, j’ai décidé de me reconvertir dans le domaine et d’en faire mon métier." + "<br></br>" +
"C'est pourquoi j'ai suivie une formation dans le développement front-end en me spécialisant dans le langage Javascript." + "</br>" +
"Je souhaite désormais en apprendre davantage, notamment le développement back-end." + "<br></br>" + 
"Cette expérience m’a permis d’acquérir un bon nombre de compétences que je souhaite aujourd’hui approfondir et développer en intégrant une entreprise en tant qu’apprentie."



profile.appendChild(title);
profile.appendChild(contents);
contents.appendChild(img);
contents.appendChild(text);
