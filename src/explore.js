import "./style/explore.css";
import logo from "./assets/images/images.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const exploreImg = document.getElementById("explore-img");
    if (exploreImg) {
        exploreImg.src = logo;
    }

    const navButton = document.getElementById("nav-button");
    if (navButton) {
        navButton.addEventListener('click', () => {
            window.location.href = "index.html";
        });
    }
});
