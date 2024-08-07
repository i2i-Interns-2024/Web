const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const packageInput = document.getElementById("package");

const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");
const phoneError = document.getElementById("phone-error");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");
const packageError = document.getElementById("package-error");

const fnamePattern = /^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/;
const lnamePattern = fnamePattern;
const phonePattern = /^5[0-9]{9}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
const emailPattern = /^([\w-]+@([\w-]+\.)+[\w-]{2,4})?$/;


const registerButton = document.getElementById("registerButton");

function validate(inputElement, pattern, errorElement) {
    const isValid = pattern.test(inputElement.value);
    if (!isValid && inputElement.value !== '') {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
    return isValid;
}

lnameInput.addEventListener("change", function () {
    validate(lnameInput, lnamePattern, lnameError);
});

fnameInput.addEventListener("change", function () {
    validate(fnameInput, fnamePattern, fnameError);
});

phoneInput.addEventListener("change", function () {
    validate(phoneInput, phonePattern, phoneError);
});

passwordInput.addEventListener("change", function () {
    validate(passwordInput, passwordPattern, passwordError);
});

emailInput.addEventListener("change", function () {
    validate(emailInput, emailPattern, emailError);
});
let checkValid;

// let checkValid;
packageInput.addEventListener("change", function () {

});

registerButton.addEventListener("click", function () {
    let checkLnameValid = validate(lnameInput, lnamePattern, lnameError);
    let checkFnameValid = validate(fnameInput, fnamePattern, fnameError);
    let checkPhoneValid = validate(phoneInput, phonePattern, phoneError);
    let checkPasswordValid = validate(passwordInput, passwordPattern, passwordError);
    let checkEmailValid = validate(emailInput, emailPattern, emailError);

    if (checkLnameValid && checkFnameValid && checkPhoneValid && checkPasswordValid && checkEmailValid ) {
        const myVar = {
            "PACKAGE_ID": packageInput.value,
            "MSISDN": phoneInput.value,
            "NAME": fnameInput.value,
            "SURNAME": lnameInput.value,
            "EMAIL": emailInput.value,
            "PASSWORD": passwordInput.value
          
        };
        console.log("fetch çalıştı");
        fetch("http://35.194.5.106:8080/api/customer/register", {/*Burası kaan api olcak*/
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(myVar)
        })
            .then((data) => {
                console.log(data.statusText);
                alert("Başarıyla kayıt oldunuz.");
                window.location.href = "EvrencellDemo\src\main\resources\static\LoginPage\index.html"
            })
            .catch((error) => {
                alert("An error occured, please try again.")
                console.error("Bir hata oluştu:", error);
            });
    }

});

const exitButton = document.getElementById('exitButton');
exitButton.addEventListener("click", function (event) {
    window.location.href = "../Login/login.html"
});

