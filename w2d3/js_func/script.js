// function myFunc(){
// 	console.log("Hi!");
// 	console.log("How are you?");
// 	alert("This is to annoy you?");
// }

// myFunc();

// function someName(numberOne, otherNumber) {
// 	console.log(numberOne + 10 + otherNumber);
// }

// someName(3,5);

// # Exercises

// - Declare a function that takes any string as an argument and console logs to the 
//user the text they've entered, try invoking it after it has been declared


// var userText = prompt("Enter some text:");

// function yourString(anyString){
	//console logs to the 
	//user the text they've entered
// 	console.log(anyString);
// }

// yourString(userText);

// - Declare a function that takes no arguments but prints something to the console, try invoking it after it has been declared

// function anotherFunc(){
// 	//print something to console
// 	console.log("Something");
// }

// anotherFunc();


// - No Whammies!!! Declare a function that receives an input of door 1, 2 or 3. Depending upon 
//which virtual "door" was entered, the function will tell the user they've received 
//a different "prize" in an alert. Try running it after it has been declared a few 
//times with each door option.

var userChoice = prompt("Please enter a door number from 1-3");

function whammies(doorNum){
	if (doorNum === "1") {
		alert("You have won a pile of hay");
	} else if (doorNum === "2") {
		alert("You have won a donkey");
	} else {
		alert("BIG WINNNER! You have won a pot of gold");
	}
}

whammies(userChoice);



















