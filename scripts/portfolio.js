function projectsFactory(data) {
    const { image , description, tags, title, link } = data;

    function getProjectsCard() {
        const projectCard = document.createElement("a");
        const portfolioSection = document.querySelector(".portfolio-projects");
        const projectImg = document.createElement("img");
        const reverseCard = document.createElement("div");
        const projectDesc = document.createElement("p");
        const projectTags = document.createElement("ul");

        projectCard.classList.add("project-card", "box-shadow");
        reverseCard.classList.add("reverse-card");
        projectDesc.classList.add("project-desc");
        projectTags.classList.add("project-tags");

        projectCard.setAttribute("href", link);
        projectCard.setAttribute("target", "_blank"); 

        projectImg.setAttribute("src", image);
        projectImg.setAttribute("alt", title);

        projectDesc.textContent = description;
    
        projectCard.addEventListener("mouseover", () => {
            reverseCard.style.display = "flex";
            projectTags.style.background = "black";
        });

        projectCard.addEventListener("mouseout", () => {
            reverseCard.style.display = "none";
            projectTags.style.background = "none";
        });

        const tagsArray = data.tags;

        tagsArray.forEach((tag) => {
            const cardTags = document.createElement("li");
            cardTags.textContent = tag;
            cardTags.classList.add("card-tags");
            projectTags.appendChild(cardTags);
        })

        portfolioSection.appendChild(projectCard);
        projectCard.appendChild(projectImg);
        projectCard.appendChild(reverseCard);
        reverseCard.appendChild(projectDesc);
        reverseCard.appendChild(projectTags);
    }

    return { image, description, tags, title, link, getProjectsCard }
}
