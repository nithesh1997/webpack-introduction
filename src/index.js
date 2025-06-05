import _ from 'lodash';
import dayjs from 'dayjs';
import logo from './assets/images/download.jpg';
import "./style/style.css";
import "./style/style.scss";
import "./assets/fonts/DancingScript-Regular.ttf";

// Function to calculate the sum
function calculateSum(a, b) {
  return Number(a) + Number(b);
}

document.addEventListener('DOMContentLoaded', () => {
  // Elements for sum calculation
  const btn = document.getElementById('btn');
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const resultText = document.getElementById('text-result');

  btn.addEventListener('click', () => {
    const num1 = num1Input.value;
    const num2 = num2Input.value;

    if (isNaN(num1) || isNaN(num2)) {
      resultText.textContent = 'Please enter valid numbers.';
      resultText.style.color = 'red';
    } else {
      const result = calculateSum(num1, num2);
      resultText.textContent = `Result: ${result}`;
      resultText.style.color = 'green';
    }
  });

  // Logo setting
  const logoImg = document.getElementById("logo");
  if (logoImg) {
    logoImg.src = logo;
  }

  // Explore button navigation
  const navButton = document.getElementById("btn-explore");
  if (navButton) {
    navButton.addEventListener('click', () => {
      window.location.href = "explore.html";
    });
  }

  // Time check element with Lodash debounce and Day.js
  const timeCheckElement = document.getElementById("time-check");
  if (timeCheckElement) {
    const updateTime = _.debounce(() => {
      const currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
      timeCheckElement.textContent = `Current Time: ${currentTime}`;
      timeCheckElement.style.color = "#007acc";
    }, 300);

    updateTime()
  }
});
