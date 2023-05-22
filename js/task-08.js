const submitFrm = document.querySelector(".login-form");
submitFrm.addEventListener("submit", (evt)=>{evt.preventDefault()});

const submitBtn = document.querySelector(".login-form button[type=submit]");
submitBtn.addEventListener("click", onSubmit);

const inputArray = document.querySelectorAll(".login-form input");

function onSubmit(evt) {

    const result = {};
    let fillErr = false;
    inputArray.forEach((element) => {
        if (element.value == "") { fillErr = true };
        result[element.name] = element.value;
    });

    if (fillErr) {
        alert("Все поля регистрации должны быть заполнены!");
    } else {
        console.log(result);
    }
}