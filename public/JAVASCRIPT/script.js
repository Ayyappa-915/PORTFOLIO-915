const display_content = document.getElementById("display-content");

const loadPage = (url) => {
    display_content.style.opacity = "0";
    display_content.style.visibility = "hidden"; // Hide before fetching new content
    
    fetch(url)
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML = html;

        // Ensure the browser has time to apply styles before showing content
        requestAnimationFrame(() => {
            setTimeout(() => {
                display_content.style.visibility = "visible";
                display_content.style.opacity = "1";
            }, 500); // Adjust if needed
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

// Event Listeners
document.getElementById("load-home").addEventListener("click", () => loadPage('/HTML/home.html'));
document.getElementById("load-about").addEventListener("click", () => loadPage('/HTML/About.html'));
document.getElementById("load-skills").addEventListener("click", () => loadPage('/HTML/skills.html'));
document.getElementById("load-projects").addEventListener("click", () => loadPage('/HTML/projects.html'));
document.getElementById("load-contact").addEventListener("click", () => loadPage('/HTML/contact.html'));

// Load Home Page on Startup
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { loadPage('/HTML/home.html'); }, 500); // Delay ensures styles are fully loaded
});
