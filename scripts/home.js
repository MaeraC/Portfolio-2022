const home = document.querySelector(".home");
const content = document.createElement("div");
const welcome = document.createElement("p");
const name = document.createElement("h1");
const animation = document.createElement("h2");
const noneAnim = document.createElement("h2");

content.classList.add("content");
welcome.classList.add("welcome");
name.classList.add("name");
animation.classList.add("animation");
noneAnim.classList.add("none-anim");

welcome.textContent = "Welcome I'm";
name.textContent = "Maera Contaret";
noneAnim.textContent = 'Apprentie Développeuse web';


home.appendChild(content);
content.appendChild(welcome);
content.appendChild(name);
content.appendChild(animation);
content.appendChild(noneAnim);