const display_content = document.getElementById("display-content");

const loadPage = (url) => {
    display_content.style.opacity = "0";
    display_content.style.visibility = "hidden"; // Hide content before loading

    fetch(url)
    .then(response => response.text())
    .then(html => {
        display_content.innerHTML = html;

        // Ensure CSS is applied before making content visible
        const checkCSS = setInterval(() => {
            const computedStyle = window.getComputedStyle(display_content);
            if (computedStyle.visibility !== "hidden") {
                clearInterval(checkCSS);
                setTimeout(() => {
                    display_content.style.visibility = "visible";
                    display_content.style.opacity = "1";
                }, 200); // Slight delay to ensure smooth transition
            }
        }, 50); // Check every 50ms
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

// Event Listeners for all sections
document.getElementById("load-home").addEventListener("click", () => loadPage('/HTML/home.html'));
document.getElementById("load-about").addEventListener("click", () => loadPage('/HTML/About.html'));
document.getElementById("load-skills").addEventListener("click", () => loadPage('/HTML/skills.html'));
document.getElementById("load-projects").addEventListener("click", () => loadPage('/HTML/projects.html'));
document.getElementById("load-contact").addEventListener("click", () => loadPage('/HTML/contact.html'));

// Ensure CSS loads before displaying the first page (home)
document.addEventListener("DOMContentLoaded", () => {
    const checkCSS = setInterval(() => {
        const computedStyle = window.getComputedStyle(document.body);
        if (computedStyle.visibility !== "hidden") {
            clearInterval(checkCSS);
            loadPage('/HTML/home.html'); // Load homepage after CSS is applied
        }
    }, 50); // Check every 50ms
});
