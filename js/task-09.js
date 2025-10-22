function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const bodyEl = document.body;
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", onClick);

function onClick() {
  const recentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = recentColor;
  spanEl.textContent = recentColor;
}
