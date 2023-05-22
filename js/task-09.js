const bodyEl = document.querySelector("body");
const titleEl = document.querySelector(".color");
const theBtn = document.querySelector(".change-color");
theBtn.addEventListener("click", onClick);

function onClick(evt) {
    const newColor = getRandomHexColor();
    titleEl.firstChild.data = newColor;
    console.log(bodyEl);
    bodyEl.style.background = newColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
