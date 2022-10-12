

const aboutMeButton = document.querySelector("#about_me_button");
const myProjectsButton = document.querySelector("#my_projects_button");

const aboutMe = document.querySelector("#about_me");
const myProjects = document.querySelector("#my_projects");

aboutMeButton.addEventListener ("click", () => {
      
    aboutMe.style.display = "block";
    myProjects.style.display = "none";
});

myProjectsButton.addEventListener ("click", () => {
    
    
    aboutMe.style.display = "none";
    myProjects.style.display = "block";
    
});



