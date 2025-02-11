const display_content = document.getElementById("display-content");

const loadPage = (url) => {
    display_content.style.opacity = "0";
    display_content.style.visibility = "hidden"; 
    
    fetch(url)
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML = html;

        setTimeout(() => {
            display_content.style.visibility = "visible";
            display_content.style.opacity = "1";
        }, 200); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

document.getElementById("load-home").addEventListener("click", () => loadPage('/HTML/home.html'));
document.getElementById("load-about").addEventListener("click", () => loadPage('/HTML/About.html'));
document.getElementById("load-skills").addEventListener("click", () => loadPage('/HTML/skills.html'));
document.getElementById("load-projects").addEventListener("click", () => loadPage('/HTML/projects.html'));
document.getElementById("load-contact").addEventListener("click", () => loadPage('/HTML/contact.html'));

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { loadPage('/HTML/home.html'); }, 300); 
});
