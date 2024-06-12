/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  createCard();
};

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function CartasColorRojo(palo) {
  return palo === "♥" || palo === "♦" ? "text-danger" : "text-dark";
}

const card = document.querySelector("#card");
function createCard() {
  const cardSymbols = ["♥", "♦", "♣", "♠"];
  const cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const randomPalo = getRandomElement(cardSymbols);
  const randomNumber = getRandomElement(cardNumbers);
  const paloColorValue = CartasColorRojo(randomPalo);
  const number = document.querySelector("#number");
  number.innerHTML = randomNumber;
  number.className = paloColorValue;
  const up = document.querySelector("#up");
  up.innerHTML = randomPalo;
  up.className = paloColorValue;
  const bottom = document.querySelector("#bottom");
  bottom.innerHTML = randomPalo;
  bottom.className = paloColorValue;
}

let time = document.querySelector("#time");
function updateCountdown(i) {
  time.innerHTML = `La nueva carta se genera en: ${i}`;
  if (i === 0) {
    i = 10;
    createCard();
  }
  setTimeout(() => updateCountdown(i - 1), 1000);
}
updateCountdown(10);

const button = document.querySelector("#button");
button.addEventListener("click", () => createCard());

const heightInput = document.getElementById("heightInput");
const bottom = document.getElementById("bottom");
const heightnumber = document.getElementById("number");

function validateInput(inputElement, minValue, message) {
  const value = parseInt(inputElement.value);
  if (value && value < minValue) {
    inputElement.value = minValue; // Set minimum value if below threshold
    alert(message); // Display error message
  }
}

heightInput.addEventListener("input", function() {
  const heightValue = heightInput.value;
  validateInput(heightInput, 349, "La altura minima de la carta es de 350");
  card.style.height = heightValue ? heightValue + "px" : "";
  number.style.marginTop =
    heightValue * 0.55 - 200 ? heightValue * 0.55 - 200 + "px" : "";
  bottom.style.marginTop =
    heightValue * 0.45 - 160 ? heightValue * 0.45 - 160 + "px" : "";
  heightInput.addEventListener("blur", function() {
    if (!heightInput.value) {
      card.style.height = "";
      bottom.style.marginTop = "";
    }
  });
});

const widthInput = document.getElementById("widthInput");
widthInput.addEventListener("input", function() {
  const widthValue = widthInput.value;
  validateInput(widthInput, 319, "El ancho minimo de la carta es de 320");
  card.style.width = widthValue ? widthValue + "px" : "";
  widthInput.addEventListener("blur", function() {
    if (!widthInput.value) {
      card.style.width = "";
    }
  });
});
