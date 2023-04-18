import { getAccounts, createNewAccount } from "./account.js";

const $email = document.getElementById("email");
const $btnLogin = document.getElementById("btn-login");

$btnLogin.onclick = () => {
    const accounts = getAccounts()
    let email = $email.value;
    if (!isEmailValid(email)) return alert("Email không hợp lệ");
    const existedUser = accounts.find((x) => x.email === email);
    if (!existedUser) {
        alert("Email không tồn tại");
        return
    }

    window.location.href = "/WebXemPhim/HTML/DanhMuc.html"
};

function isEmailValid(email) {
    const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    return regex.test(email)
}

const $register = document.getElementById("register-text");
const $btnRegister = document.getElementById("btn-register");
const $password = document.getElementById("password");
const $retypePassword = document.getElementById("retype-password");
const $emailRegister = document.getElementById("email-register");
$register.onclick = () => {
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("register-modal").style.display = "block";
};

$btnRegister.onclick = () => {
    let emailRegister = $emailRegister.value
    if ($password.value != $retypePassword.value) return alert("Password không hợp lệ");
    if (!isEmailValid(emailRegister)) return alert("Email không hợp lệ");

    createNewAccount({
        email: emailRegister,
        password: $password.value
    })
};


