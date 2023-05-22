const inputEl = document.querySelector("#validation-input");
//const styleValid = window.getComputedStyle(inputEl, "invalid");
    //document.querySelector("#validation-input.valid");  
//const styleInvalid = document.querySelector("#validation-input.invalid");  

//console.log(styleValid);

inputEl.addEventListener("blur", onBlurInput);

function onBlurInput(evt) {

    const lenMax = Number(evt.currentTarget.getAttribute("data-length"));
    const isValid = evt.currentTarget.value.length < lenMax;
    
    evt.currentTarget.classList.toggle("valid", isValid);
    evt.currentTarget.classList.toggle("invalid", !isValid);

}
