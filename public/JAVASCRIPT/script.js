

const load_about = document.getElementById("load-about");
const load_skills = document.getElementById("load-skills");
const load_projects = document.getElementById("load-projects");
const load_contact = document.getElementById("load-contact");
const load_home = document.getElementById("load-home")
const display_content=document.getElementById("display-content");

const portfolio_about = () => {
    display_content.style.opacity = "0"; // Hide before loading

    fetch('/HTML/About.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML = html;
        setTimeout(() => {
            display_content.style.opacity = "1"; // Show after a slight delay
        }, 100); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

const home = () => {
    display_content.style.opacity="0";
    fetch('/HTML/home.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML=html;
        setTimeout(() => {
            display_content.style.opacity = "1"; // Show after a slight delay
        }, 100); 
    })
    .catch(error => {
        console.error('Error:',error)
    });
    
};
const skills = () => {
    display_content.style.opacity="0";
    fetch('/HTML/skills.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML=html;
        setTimeout(() => {
            display_content.style.opacity = "1"; // Show after a slight delay
        }, 100); 
    })
    .catch(error => {
        console.error('Error:',error)
    });
};
const projects = () => {
    display_content.style.opacity="0";
    fetch('/HTML/projects.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML=html;
        setTimeout(() => {
            display_content.style.opacity = "1"; // Show after a slight delay
        }, 100); 
    })
    .catch(error => {
        console.error('Error:',error)
    });
};
const contact = () => {
    display_content.style.opacity="0";
    fetch('/HTML/contact.html')
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML=html;
        setTimeout(() => {
            display_content.style.opacity = "1"; // Show after a slight delay
        }, 100); 
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



