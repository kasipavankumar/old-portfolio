const scrollButton = document.getElementById("scroll-top-btn");

// On scrolling, the button will be displayed
window.onscroll = () => {
    scrollToTop()
};

// Show when scroll state is greater than 20
const scrollToTop = () => {
    if(document.body.scrollTop > 20 
        || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
}

// Set the scroll state 0
const setScrollState = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}