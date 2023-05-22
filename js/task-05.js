const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("keydown", onChangeInput);

function onChangeInput(evt) {
    outputEl.textContent = inputEl.value === "" ? "Anonymous" : inputEl.value;
}