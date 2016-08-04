document.getElementById("clock").innerHTML = new Date();

setInterval(function(){
	var myTime = new Date();
	document.getElementById("clock").innerHTML = myTime;
	console.log(myTime);
}, 1000);


// var myTime = new Date();
// var hours = myTime.getHours();
// var minutes = myTime.getMinutes();
// console.log("This is myTime: "+myTime);
// console.log("This is hours: "+ hours);
// console.log("This is minutes: "+ minutes);

// document.getElementById("clock").innerHTML = myTime;
//var myArray = ["Bob", "Fred", "Sarah"];








	// var cheese = "good";
	// var minute = myTime.getMinutes();
	// var hours = myTime.getHours();
	// var seconds = myTime.getSeconds();
	// console.log(myArray[Math.floor(Math.random()*myArray.length)]);
	// document.getElementById("hours").innerHTML= hours;
	// document.getElementById("minutes").innerHTML= minute;
	// if (seconds%5 === 0){
	// 	document.getElementById("home").style.backgroundColor = randomColor();
	// } else if (seconds%15===0){
	// 	console.log("seconds is a multiple of 15");
	// } else {
	// 	console.log("seconds is not a multiple of 15 or 5")

	// }
	// // document.body.style.backgroundColor = "pink";
	// if (hours > 12) {
	// 	document.getElementById("message").innerHTML = "Good Afternoon";
		
	// }
	



// var myNum = 27;

function randomColor(){
	return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
} 






// console.log(myArray[Math.floor(Math.random()*myArray.length)]);


