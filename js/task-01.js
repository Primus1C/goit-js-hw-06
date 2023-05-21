const ulEl = document.querySelector("#categories");
const ulArray = [...ulEl.children];
console.log("Number of categories:", ulArray.length);
console.log();

ulArray.forEach((element) => {
    const categoryEl = element.querySelector("h2");
    console.log("Category:", categoryEl.innerHTML);

    const liEl = element.querySelector("ul");
    const liArray = [...liEl.children];

    console.log("Elements:", liArray.length);
    console.log();
});

