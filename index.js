//The four following variables must be true before the submitButton eventlistener will perform any actions.
let emailOk = false;
let usernameOk = false;
let passwordOk = false;
let retypePasswordOk = false;
let validEmail;
let validPassword;
let validUsername;
let makeButton = document.getElementById("make-button");
let submitButton = document.getElementById("submit-button");
let container = document.getElementById("container");
let inputEmail = document.getElementById("input-email");
let inputUsername = document.getElementById("input-username");
let inputPassword = document.getElementById("input-password");
let inputRetype = document.getElementById("input-retype");
let emailHint = document.getElementById("email-hint");
let usernameHint = document.getElementById("username-hint");
let passwordHint = document.getElementById("password-hint");
let retypeHint = document.getElementById("retype-hint");
let success = document.getElementById("success");
let takenNames = ["CatStack", "Ishtar", "Dan", "fluckywucky69"];

makeButton.addEventListener("click", ()=> {
    container.style.display = "inline";
    makeButton.style.display = "none";
}, false);

inputEmail.addEventListener("blur", ()=> {
    let test = inputEmail.value.match(/^.+@.+\.\w{2,3}$/gi);
    if(test === null) {
        emailHint.innerText = "You gotta put in an email address, silly.";
    } else{
        validEmail = inputEmail.value;
        emailHint.innerText = "";
        emailOk = true;
    }
}, false);

inputUsername.addEventListener("blur", ()=> {
    let test = takenNames.includes(inputUsername.value);
    if(test){
        usernameHint.innerText = "Sorry bud, that username has already been taken.";
    } else {
        usernameOk = true;
        usernameHint.innerText = "";
        validUsername = inputUsername.value;
    }
}, false);

inputPassword.addEventListener("blur", ()=> {
    let testLength = inputPassword.value.match(/^.{6,12}$/);
    if(testLength === null){
        passwordHint.innerText = "Password must be between 6-12 characters long."
    }
    let testNumber = inputPassword.value.match(/\d+/);
    if(testNumber === null){
        passwordHint.innerHTML += "<br>Password must contain at least one number."
    }
    let testSpecial = inputPassword.value.match(/[.!@#$%^&*()_+\-=]/);
    if(testSpecial === null){
        passwordHint.innerHTML += "<br>Password must contain at least one special character."
    }
    if(testLength !== null && testNumber !== null && testSpecial !== null){
        passwordHint.innerHTML = "";
        passwordOk = true;
        validPassword = inputPassword.value;
    }
}, false);

inputRetype.addEventListener("blur", ()=> {
    if(inputRetype.value !== inputPassword.value){
        retypeHint.innerText = "Does not match password!"
    } else {
        retypePasswordOk = true;
        retypeHint.innerText = ""
    }
}, false);

submitButton.addEventListener("click", ()=> {
    if(emailOk && usernameOk && passwordOk && retypePasswordOk){
        takenNames.push(validUsername);
        inputEmail.value = "";
        inputUsername.value = "";
        inputPassword.value = "";
        inputRetype.value = "";
        emailOk = false;
        usernameOk = false;
        passwordOk = false;
        retypePasswordOk = false;
        success.innerText = `Congrats, you created a new account! Your username is ${validUsername}, the email associated with this account is ${validEmail}, and your password is ${validPassword}`;
    }
})