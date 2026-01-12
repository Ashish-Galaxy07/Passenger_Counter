//document.getElementById("count-el").innerText = 5

// let count = 0;
// console.log(count);

// function countdown(num){
//     for(let i=num; i>0; i--){
//         console.log(i);
//     }
// }
// countdown(5);
// console.log("Start the race!");

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0;
function increment(){
    count+=1;
    countEl.textContent = count;
    console.log(count);
}

// ## NOTE: textContent is faster and better than innerText;

function save(){
    let countStr = count + " - "; //innerText wasn't displaying spaces (hidden)
    saveEl.textContent += countStr; //so we use textContent
    count = 0;
    countEl.textContent = 0;
    console.log(count);
}

//string + num = string (string has priority in js)
console.log("My Score: "+ 8 + 5); 

