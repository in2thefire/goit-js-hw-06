const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onBlur);
function onBlur(evt) {
  const currentLength = evt.currentTarget.value.length;
  const requiredLength = inputEl.dataset.length;
  if (currentLength === requiredLength) {
  }
}
