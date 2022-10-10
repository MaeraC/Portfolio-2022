const skills = document.querySelectorAll(".skill-bar");

const container = document.querySelector(".skills-animation");

window.addEventListener("scroll", () => {
    const {scrollTop, clientHeight} = document.documentElement;

    skills.forEach((skill) => {
        const topView = skill.getBoundingClientRect().top;

        if (scrollTop > (scrollTop + topView).toFixed() - clientHeight * 0.80) {
            container.children[0].children[0].classList.add("html-bar");
            container.children[1].children[0].classList.add("css-bar");
            container.children[2].children[0].classList.add("js-bar");
            container.children[3].children[0].classList.add("sass-bar");
            container.children[4].children[0].classList.add("react-bar");
            container.children[5].children[0].classList.add("git-bar");
        }
    });
});