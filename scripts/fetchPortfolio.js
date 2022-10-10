fetch("datas/projects.json")
.then((res) => res.json())
.then((data) => {
    const projects = data;

    projects.forEach((item) => {
        const projectsModel = projectsFactory(item);
        projectsModel.getProjectsCard();
    })

    
});