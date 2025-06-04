import { calculateSum } from './sum.js';
import logo from './assets/download.jpg'

document.addEventListener('DOMContentLoaded', () => {
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
});


document.getElementById("logo").src = logo