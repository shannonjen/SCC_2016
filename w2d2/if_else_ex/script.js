// if else

if (false) {
	console.log("This is my if");
} else {
	console.log("This is my else");
}

// # Exercises


// - Write a conditional that checks if a variable is less than 10. If 
//it is, alert the user that their variable is less than 10. If it is not,
// let the user know what the variable was and that it was greater than 10.

var myVar = 12;

if (myVar < 10) {
	alert("Your variable is less than 10");
} else {
	alert("Your variable " +myVar+ " is greater than 10");
}


// password example

var password = "1234";



if (password === "1235"){
	alert("welcome to your social media account");
} else {
	alert("back off creep");
}


// using prompt

var myVar = prompt("Please enter a number");

if (myVar < 10) {
	alert("Your variable is less than 10");
} else {
	alert("Your variable " +myVar+ " is greater than 10");
}

// password example with prompt

var enteredPassword = prompt("Please enter your password");
var storedPassword = "1234";


if (enteredPassword === storedPassword){
	alert("You have entered the right password. Welcome to your social media account.");
} else {
	alert("You have entered the wrong password.");
}


