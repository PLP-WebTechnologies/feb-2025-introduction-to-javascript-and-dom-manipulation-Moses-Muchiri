const title = document.getElementById("main-title");
const description = document.getElementById("description");
const cardContainer = document.getElementById("card-container");
const themeToggle = document.getElementById("theme-toggle");

const pexelsImages = [
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
  "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg"
];

// Change title text
document.getElementById("change-text-btn").addEventListener("click", () => {
title.textContent = "🚀 DOM Fully Operational, as you can see!";
});

// Toggle style on description
document.getElementById("toggle-style-btn").addEventListener("click", () => {
  description.style.fontSize = description.style.fontSize === "24px" ? "16px" : "24px";
  description.style.color = description.style.color === "var(--accent)" ? "var(--text-color)" : "var(--accent)";
});

// Add card with random image from pexels
document.getElementById("add-element-btn").addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = pexelsImages[Math.floor(Math.random() * pexelsImages.length)];
  const text = document.createElement("p");
  text.textContent = "Here's a stunning image from Pexels!";
  card.appendChild(img);
  card.appendChild(text);
  cardContainer.appendChild(card);
});

// Remove last card
document.getElementById("remove-element-btn").addEventListener("click", () => {
  const lastCard = cardContainer.lastElementChild;
  if (lastCard) cardContainer.removeChild(lastCard);
});

// Toggle light/dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
