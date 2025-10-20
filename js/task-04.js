const counterValueEl = document.querySelector("#value");
let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

console.dir(counterValue);
decrement.addEventListener("click", dec);
increment.addEventListener("click", inc);

function inc() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}

function dec() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}
