const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlurInput);

function onBlurInput(evt) {

    const lenMax = Number(evt.currentTarget.getAttribute("data-length"));
    const isValid = evt.currentTarget.value.length < lenMax;
    
    evt.currentTarget.classList.toggle("valid", isValid);
    evt.currentTarget.classList.toggle("invalid", !isValid);

}
