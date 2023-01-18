let inputNumber1 = Number(document.getElementById("inputNumber1").value);
let inputNumber2 = Number(document.getElementById("inputNumber2").value);
let operator = document.getElementById("operator").value;
// first function just needs to return the two inputs added together, changed to arrow function
let add = (inputNumber1, inputNumber2) => inputNumber1 + inputNumber2;
// creating variables to use leter on in if statements
let totalAdded = add(inputNumber1, inputNumber2);

// same function as before but with minusing as arrow function
let minus = (inputNumber1, inputNumber2) => inputNumber1 - inputNumber2;
let totalMinused = minus(inputNumber1, inputNumber2);

// same but with multiplying
let multiply = (inputNumber1, inputNumber2) => inputNumber1 * inputNumber2;
let totalMultiplied = multiply(inputNumber1, inputNumber2);

// same but divided
let divide = (inputNumber1, inputNumber2) => inputNumber1 / inputNumber2;

let totalDivided = divide(inputNumber1, inputNumber2);

/* else if statements to check what operator was input earlier in the code which will
then run the different codes to get the correct output */
function calculate(){
let inputNumber1 = Number(document.getElementById("inputNumber1").value);
let inputNumber2 = Number(document.getElementById("inputNumber2").value);
let operator = document.getElementById("operator").value;
//first function just needs to return the two inputs added together, changed to arrow function
let add = (inputNumber1, inputNumber2) => inputNumber1 + inputNumber2;
// creating variables to use leter on in if statements
let totalAdded = add(inputNumber1, inputNumber2);

// same function as before but with minusing as arrow function
let minus = (inputNumber1, inputNumber2) => inputNumber1 - inputNumber2;
let totalMinused = minus(inputNumber1, inputNumber2);

// same but with multiplying
let multiply = (inputNumber1, inputNumber2) => inputNumber1 * inputNumber2;
let totalMultiplied = multiply(inputNumber1, inputNumber2);

// same but divided
let divide = (inputNumber1, inputNumber2) => inputNumber1 / inputNumber2;

let totalDivided = divide(inputNumber1, inputNumber2);

if(operator== "add"){
alert(`${inputNumber1} + ${inputNumber2} = ${totalAdded}`)
}
else if (operator == "subtract"){
alert(`${inputNumber1} - ${inputNumber2} = ${totalMinused}`)
}
else if (operator == "multiply"){
alert(`${inputNumber1} x ${inputNumber2} = ${totalMultiplied}`)
}
else if (operator == "divide"){
alert(`${inputNumber1} / ${inputNumber2} = ${totalDivided}`)
}
else{
alert("please try again with the correct operator")
}
}