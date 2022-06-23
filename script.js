
// let userName = prompt("Enter your name");
// const SERVER_NAME = "canvas.com/students";

// console.log(userName);
// document.write(`Welcome to the system ${userName}`);

//IN CLASS EX: get email, name and salary (monthly) from the prompt and display the info in HTML
let userName = prompt("Enter your name");
let userEmail = prompt("Enter your email");
let userSalary = prompt("Enter your monthly salary");

document.write(`
    <p>Name: ${userName}</p>
    <p>Email: ${userEmail}</p>
    <p>Monthly salary: $${userSalary}</p>`);

// IF STATEMENTS
if(confirm("Are you " + userName + "?")){
    console.log("Hello " + userName);
} else{
    console.log("Then what is your name?");
}

let number = 99;
if(number == 99){
    console.log("The number is correct");
}

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = Number(prompt("Enter the third number:"));
let notTrue = false;

if(num1 < num2){
    console.log("num1 is smaller than num2");
} else{
    console.log("num1 is NOT smaller than num2");
}

if(num1<num2 && num3>num2){
    console.log("num1 is smaller than num2 AND num3 is larger than num2");
}

if(num1==1 || num2==1 || num3==1){
    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}

if(!notTrue){
    console.log("not not true is true!");
}