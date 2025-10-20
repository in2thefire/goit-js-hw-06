const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(evt) {
  const value = evt.currentTarget.value;
  if (value) {
    outputEl.textContent = value;
    return;
  }
  outputEl.textContent = "Anonymous";
}
