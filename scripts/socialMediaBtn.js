const socialMediaSection = document.querySelector(".social-media");

const socialBtn = document.createElement("div");
const linkedinBtn = document.createElement("div");
const linkedinImg = document.createElement("img");
const githubBtn = document.createElement("div");
const githubImg = document.createElement("img");

socialBtn.classList.add("social-btn");
linkedinBtn.classList.add("linkedin");
githubBtn.classList.add("github");





socialBtn.addEventListener("click", () => {
    socialBtn.classList.toggle("social-btn-active");
    linkedinBtn.classList.toggle("linkedin-active");
    githubBtn.classList.toggle("github-active");

    linkedinImg.setAttribute("src", "https://maerac.github.io/assets/icons/linkedin-icon.png");
    githubImg.setAttribute("src", "../assets/github.png");
    linkedinImg.setAttribute("alt", "icone linkedin");
    githubImg.setAttribute("alt", "icone github");
})

linkedinBtn.addEventListener("click", () =>{
    window.open("https://www.linkedin.com/in/maera-contaret-5ab94a221/")
})

githubBtn.addEventListener("click", () =>{
    window.open("https://github.com/MaeraC")
})

socialMediaSection.appendChild(socialBtn);
socialMediaSection.appendChild(linkedinBtn);
linkedinBtn.appendChild(linkedinImg);
socialMediaSection.appendChild(githubBtn);
githubBtn.appendChild(githubImg);