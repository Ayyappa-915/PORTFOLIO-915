

const load_about = document.getElementById("load-about");
const load_skills = document.getElementById("load-skills");
const load_projects = document.getElementById("load-projects");
const load_contact = document.getElementById("load-contact");
const load_home = document.getElementById("load-home")
const display_content=document.getElementById("display-content");

const portfolio_about = () =>
{
    fetch('/HTML/About.html')
    .then(response => {
        return response.text()
    })
    .then(html => {
        display_content.innerHTML=html;
    })
    .catch(error => {
        console.error('Error:',error)
    });
};
const home = () => {
    fetch('/HTML/home.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML=html;
    })
    .catch(error => {
        console.error('Error:',error)
    });
    
};
const skills = () => {
    fetch('/HTML/skills.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML=html;
    })
    .catch(error => {
        console.error('Error:',error)
    });
};
const projects = () => {
    fetch('/HTML/projects.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML=html;
    })
    .catch(error => {
        console.error('Error:',error)
    });
};
const contact = () => {
    fetch('/HTML/contact.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML=html;
    })
    .catch(error => {
        console.error('Error:',error)
    });
};



load_contact.addEventListener("click",()=>{
    contact();
});
load_about.addEventListener("click", ()=> {
    portfolio_about();
});
load_home.addEventListener("click", ()=> {

    home();
});
load_skills.addEventListener("click",()=>{
   skills(); 
});
load_projects.addEventListener("click",()=>{
    projects(); 
});
document.addEventListener("DOMContentLoaded",()=>{
    home();
});



