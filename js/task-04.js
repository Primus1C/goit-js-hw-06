let counterValue = 0;
const valueEl = document.querySelector("#value");
const btnMinus = document.querySelector("button[data-action=decrement]");
const btnPlus = document.querySelector("button[data-action=increment]");

btnMinus.addEventListener("click", onClickBtnMinus);
btnPlus.addEventListener("click", onClickBtnPlus);

function onClickBtnMinus(evt) {
    counterValue -=1;
    valueEl.innerText = counterValue;
}

function onClickBtnPlus(evt) {
    counterValue += 1;
    valueEl.innerText = counterValue;
}

