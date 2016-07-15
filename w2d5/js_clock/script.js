// var myTime = new Date();
// var hours = myTime.getHours();
// var minutes = myTime.getMinutes();
// console.log("This is myTime: "+myTime);
// console.log("This is hours: "+ hours);
// console.log("This is minutes: "+ minutes);

// document.getElementById("clock").innerHTML = myTime;

setInterval(function(){
	var myTime = new Date();
	var minutes = myTime.getMinutes();
	if (minutes%2 === 0){
		console.log("minutes is even");
	} else {
		console.log("minutes is odd");
	}
	// document.body.style.backgroundColor = "pink";
	document.getElementById("clock").innerHTML = myTime;
}, 1000);


// var myNum = 27;



