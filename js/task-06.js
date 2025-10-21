const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onBlur);

function onBlur(evt) {
  const currentLength = evt.currentTarget.value.length;
  const requiredLength = Number(inputEl.dataset.length);

  if (currentLength === requiredLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
