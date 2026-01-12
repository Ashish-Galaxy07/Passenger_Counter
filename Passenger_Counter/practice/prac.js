let welcomeEl = document.getElementById("welcome-el");
let myName = "Ash";
let greeting = "Welcome Back ";
welcomeEl.innerText = greeting + myName;
welcomeEl.innerText += "😊";

let errPara = document.getElementById("error");
console.log(errPara);

function purchase(){
    console.log("button clicked");
    errPara.textContent = "Something went wrong. Please try again !"
}