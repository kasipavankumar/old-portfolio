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
