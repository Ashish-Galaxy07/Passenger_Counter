let num1 = 2;
let num2 = 5;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");
function add(){
    result = num1 + num2;
    sumEl.textContent = "Sum: " + result; //or use bracket (num1 + num2)
}
function subtract(){
    result = num1 - num2;
    sumEl.textContent = "Subtract: " + result;
}
function multiply(){
    result = num1 * num2;
    sumEl.textContent = "Product: " + result;
}
function divide(){
    result = num1 / num2;
    sumEl.textContent = "Quotient: " + result;
}
