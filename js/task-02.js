const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ulEl = document.querySelector("#ingredients");
const arr = [];
ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  arr.push(li);
});
ulEl.append(...arr);