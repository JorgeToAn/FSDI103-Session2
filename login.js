// STORED INFORMATION
let userName = "funkedtoast";
let userPassword = "abc123";

// ---- LOGIN FUNCTIONALITY
// Get the username and password from the user using a prompt
let uName = prompt("Enter your username:");
let uPass = prompt("Enter your password:");

//Compare the introduced data with the stored information
if(uName == userName && uPass == userPassword){
    // Display a welcome message
    document.write(`Welcome ${userName}!`);
    console.log(`LOGIN SUCCESFUL`);
} else{
    // Display invalid credentials
    document.write("Your username or password information is incorrect");
    console.log("LOGIN INVALID");
}