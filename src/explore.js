import _ from 'lodash';
import dayjs from 'dayjs';
import "./style/explore.css";
import logo from "./assets/images/images.jpg";

document.addEventListener("DOMContentLoaded", () => {
  // Set image source
  const exploreImg = document.getElementById("explore-img");
  if (exploreImg) {
    exploreImg.src = logo;
  }

  // Navigate to index.html
  const navButton = document.getElementById("nav-button");
  if (navButton) {
    navButton.addEventListener('click', () => {
      window.location.href = "index.html";
    });
  }

  // Time check element using lodash + dayjs
  const timeCheckElement = document.getElementById("time-check");
  if (timeCheckElement) {
    const updateTime = _.debounce(() => {
      const currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
      timeCheckElement.textContent = `Current Time: ${currentTime}`;
      timeCheckElement.style.color = "#2b9348";
    }, 300);

    updateTime();
  }
});
