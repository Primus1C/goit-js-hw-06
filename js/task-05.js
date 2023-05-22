const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onChangeInput);

function onChangeInput(evt) {
    outputEl.textContent = evt.currentTarget.value === "" ? "Anonymous" : evt.currentTarget.value;
}