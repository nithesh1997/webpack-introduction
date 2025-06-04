import "./style/explore.css";
import logo from "./assets/images.jpg"

    document.getElementById("explore-img").src = logo;

    const navButton = document.getElementById("nav-button");
        navButton.addEventListener('click', () => {
            window.location.href = "index.html";
        });

