const boxesEl = document.querySelector("#boxes");

const controlEl = document.querySelector("#controls");

const inputEl = controlEl.children[0];
const btnCreate = controlEl.children[1];
const btnDestroy = controlEl.children[2];
btnCreate.addEventListener("click", onClickCreate);
btnDestroy.addEventListener("click", onClickDestroy);

let divArray = [];

function onClickCreate(evt) {
    createBoxes(inputEl.value);
}

function onClickDestroy(evt) {
  destroyBoxes();
}

function createBoxes(amount) {
    const size = 30;
    const step = 10;
    for (let index = 0; index < amount; index++) {
        //const element = array[index];
        const div = document.createElement("div");
        const strSize = size + index * step + "px";

        div.style.height = strSize;
        div.style.width = strSize;
        div.style.background = getRandomHexColor();
        boxesEl.appendChild(div);
      console.log(div);
      divArray.push(div);
    }
}

function destroyBoxes() {
  divArray.forEach(element => {
    element.remove();
  });
  divArray = [];
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
