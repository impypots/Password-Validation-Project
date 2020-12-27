let emailOk = false;
let usernameOk = false;
let passwordOk = false;
let retypePasswordOk = false;
let makeButton = document.getElementById("make-button");
let container = document.getElementById("container");
let inputEmail = document.getElementById("input-email")
console.log("hello, world", emailOk);

makeButton.addEventListener("click", ()=> {
    container.style.display = "inline";
    makeButton.style.display = "none";
}, false);

inputEmail.addEventListener("blur", ()=> {
    alert("You lost focus!!");
    let test = inputEmail.value.match(/^.+@.+\.\w{2,3}$/gi);
    console.log(test)
    if(test === null) {
        alert("You gotta put in an email address silly.")
    }
})