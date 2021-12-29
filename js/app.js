// Validando el Register
function buttonRegister() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const errEmail = document.getElementById("errEmail");
    const errName = document.getElementById("errName");
    const errUser = document.getElementById("errUser");
    const errPassword = document.getElementById("errPassword");

    const registerButton = document.getElementById("registerButton");

    if (name !== "" && password !== "" && email !== "" && user !== "") {
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        localStorage.setItem("user", user);
        localStorage.setItem("password", password);
        registerButton.textContent = "Registrando...";
        setTimeout(() => {
            window.location.replace("./login.html");
        }, 2000);
    } else if (name == "" && password == "" && email == "" && user == "") {
        err.textContent = "No debe haber campos vacios";
        err.style.color = "red";
        setTimeout(() => err.textContent = "", 2500);
    } else if (email == "") {
        errEmail.textContent = "*Campo obligatorio";
        errEmail.style.color = "red";
        setTimeout(() => errEmail.textContent = "", 2000);
    } else if (name == "") {
        errName.textContent = "*Campo obligatorio";
        errName.style.color = "red";
        setTimeout(() => errName.textContent = "", 2500);
    } else if (user == "") {
        errUser.textContent = "*Campo obligatorio";
        errUser.style.color = "red";
        setTimeout(() => errUser.textContent = "", 2500);
    } else {
        errPassword.textContent = "*Campo obligatorio";
        errPassword.style.color = "red";
        setTimeout(() => errPassword.textContent = "", 2500);
    }
};
// Validando el LOGIN
   const admin = "admin"
   localStorage.setItem('admin', admin);
   const adminPassword = "admin"
   localStorage.setItem("admin", adminPassword);
function validateForm() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const errUser = document.getElementById("errUser");
    const errPassword = document.getElementById("errPassword");
    const loginButton = document.getElementById("loginButton");

    const getName = localStorage.getItem("user");
    const getPassword = localStorage.getItem("password");

   
   

   
   



    if (user === getName && password === getPassword) {
        loginButton.textContent = "Ingresando...";
        setTimeout(() => {
            window.location.replace("./index.html");
        }, 2000);
    } else if (user===admin && password===adminPassword) {
        loginButton.textContent="Ingresando...";
        setTimeout(() => {
            window.location.replace("https://valenmarenda-portfolio.vercel.app/");
        }, 2000);
    
    }
    else if (user == "" || password == "") {
        err.textContent = "Todos los campos son obligatorios"
        err.style.color = "red";
        setTimeout(() => err.textContent = "", 2500);
    } else if (user !== getName) {
        errUser.textContent = "Usuario incorrecto";
        errUser.style.color = "red";
        setTimeout(() => errUser.textContent = "", 3000);
    } else if (password !== getPassword) {
        errPassword.textContent = "Contraseña incorrecta";
        errPassword.style.color = "red";
        setTimeout(() => errPassword.textContent = "", 3000);
    }
}

// const close = document.getElementById("close").addEventListener('click', () => {
//     nameUser = "";
//     pa
// });


// Formulario de Contacto

function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const submit = document.getElementById("submit");
    const err = document.getElementById("err");

    if (name !== "" && email !== "" && phone !== "" && message !== "") {
        submit.textContent = "Mensaje enviado"
        setTimeout(() => submit.textContent = "Enviar", 2500);
    } else {
        err.classList.remove("visually-hidden");
        setTimeout(() => err.classList.add("visually-hidden"), 3000);
    }

}


// Validando el Form de compra
document.getElementById("viewTotal").addEventListener('click', () => replaceForm());
// document.getElementById("pay").addEventListener('click', () => validateFormPay());
document.getElementById("cancel").addEventListener('click', () => returnBikes());

function replaceForm() {
    window.location.replace("./cart.html");
}

function validateFormPay() {
    const fullName = document.getElementById("fullName").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const numberCard = document.getElementById("numberCard").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const cvv = document.getElementById("cvv").value;
    const nameCard = document.getElementById("nameCard").value;
    const err = document.getElementById("err");
    const success = document.getElementById("successfull");

    if (fullName !== "" && street !== "" && city !== "" && zip !== "" && numberCard !== "" && month !== "" && year !== "" && cvv !== "" && nameCard !== "") {
        success.textContent = "¡Tu compra fue realizada con exito!";
        success.style.color = "green";
        success.style.fontFamily = "serif;"
        success.style.fontSize = "40px"
        setTimeout(() => success.textContent = "", 2500);
    } else {
        err.textContent = "Todos los campos son obligatorios"
        err.style.color = "red";
        setTimeout(() => err.textContent = "", 2500);
    }
}


function cancel() {
    const buttonCancel = document.getElementById("cancel");
    buttonCancel.textContent = "Operacion cancelada";
    buttonCancel.style.color = "red";
    setTimeout(() => buttonCancel.textContent = "", 2500);
}