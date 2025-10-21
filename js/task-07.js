const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
rangeEl.addEventListener("input", onRange);

function onRange(evt) {
  const currentValue = evt.currentTarget.value;
  textEl.style.fontSize = `${currentValue}px`;
}
