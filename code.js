const inputs = document.querySelectorAll("input");
const validInfo = document.createElement("div");
validInfo.classList.add("validInfo");
let passwordInput = "";

const passwordField = document.querySelector(".password");
const emailField = document.querySelector(".email");
const firstNameField = document.querySelector(".firstName");
const secondNameField = document.querySelector(".secondName");
const telField = document.querySelector(".tel");
const passwordConfirmField = document.querySelector(".passwordConfirm")


inputs.forEach((item) => item.classList.add("focusChecker"));

inputs.forEach((item) => item.addEventListener('keyup', (e) => {
    setTimeout(() => { 
        item.classList.add("validChecker");
        item.classList.remove("focusChecker");
        if (e.target.checkValidity() == false) {
            switch (e.target.id) {
                case "pass":
                    validInfo.textContent = "Longer than 6 characters";
                    passwordField.appendChild(validInfo);
                    break;
                case "email":
                    validInfo.textContent = "Must be valid email";
                    emailField.appendChild(validInfo);
                    break;
                case "firstName":
                    validInfo.textContent = "Must be longer than 1";
                    firstNameField.appendChild(validInfo);
                    break;
                case "secondName":
                    validInfo.textContent = "Must be longer than 1";
                    secondNameField.appendChild(validInfo);
                    break;
                case "tel":
                    validInfo.textContent = "Must be 10 numbers";
                    telField.appendChild(validInfo);
                    break;
            }


        }
    }, 2000);
    if (e.target.id == "pass-confirm") {
        if (passwordInput != e.target.value) {
            e.target.setCustomValidity("Invalid Field");
            validInfo.textContent = "Must be same as password";
            passwordConfirmField.appendChild(validInfo);
            console.log("Not the same");
        }
        else{
            e.target.setCustomValidity("");
        }
    }
    if (e.target.checkValidity() == true) {
        validInfo.remove();
    }

    if (e.target.id == "pass") {
        passwordInput = e.target.value;
    }
}));


const button = document.querySelector("button");
button.addEventListener('click', () => console.log(passwordInput));

