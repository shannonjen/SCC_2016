// var myTime = new Date();
// var hours = myTime.getHours();
// var minutes = myTime.getMinutes();
// console.log("This is myTime: "+myTime);
// console.log("This is hours: "+ hours);
// console.log("This is minutes: "+ minutes);

// document.getElementById("clock").innerHTML = myTime;
var myArray = ["Bob", "Fred", "Sarah"];







setInterval(function(){
	var myTime = new Date();
	var cheese = "good";
	var minute = myTime.getMinutes();
	var hours = myTime.getHours();
	var seconds = myTime.getSeconds();
	console.log(myArray[Math.floor(Math.random()*myArray.length)]);
	document.getElementById("hours").innerHTML= hours;
	document.getElementById("minutes").innerHTML= minute;
	if (seconds%5 === 0 && cheese==="good"){
		document.getElementById("home").style.backgroundColor = randomColor();
	} else {
		console.log("seconds is not a multiple of 5");
	}
	// document.body.style.backgroundColor = "pink";
	if (hours > 12) {
		document.getElementById("message").innerHTML = "Good Afternoon";
	}
	
}, 1000);


// var myNum = 27;

function randomColor(){
	return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
} 






// console.log(myArray[Math.floor(Math.random()*myArray.length)]);


