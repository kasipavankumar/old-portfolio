/**
 * D. Kasi Pavan Kumar
 * © 2020
 */

const scrollButton = document.getElementById("scroll-top-btn");
const navBar = document.getElementById("navbar");

// On scrolling, the button will be displayed
window.onscroll = () => {
    scrollToTop();
};

// Show when scroll state is greater than 20
const scrollToTop = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollButton.style.display = "block";
        navBar.classList.add("elevate-navbar");
    } else {
        scrollButton.style.display = "none";
        navBar.classList.remove("elevate-navbar");
    }
};

// Set the scroll state 0
const setScrollState = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.location.hash = "";
};

/**
 * Generate project cards.
 */
const generateProjectCard = (name, link, webpImageSource, pngImageSource) => {
    const projectCard = `<picture>
            <source type="image/webp" srcset="${webpImageSource}">
            <source type="image/png" srcset="${pngImageSource}">
            <img src="${pngImageSource}" loading="lazy" alt="${name}">
        </picture>
        <a rel="noopener" href="${link}" target="_blank">
            <p>${name} &#8599;</p>
        </a>`;

    return projectCard;
};

const projectGrid = document.getElementById("project-grid");

/**
 * Fetch project details from ../data/projects.json
 */
fetch("/portfolio/data/projects.json", {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})
    .then(response => response.json())
    .then(data => {
        const { projects } = data;
        projects.forEach(project => {
            const { name, link, webpImageSource, pngImageSource } = project;
            const projectTileDiv = document.createElement("div");

            projectTileDiv.className = "project-tile";
            projectTileDiv.innerHTML = generateProjectCard(
                name,
                link,
                webpImageSource,
                pngImageSource
            );

            projectGrid.appendChild(projectTileDiv);
        });
    });
