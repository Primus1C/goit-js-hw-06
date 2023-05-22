const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

function onInput(evt) {
    textEl.style.fontSize = evt.currentTarget.value + "px";
}
