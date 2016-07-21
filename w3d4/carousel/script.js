//array of the divs with a class of color-div
var divs = $('.color-div');
//counter to keep track of the number 
//of the array item we are on
var currentIndex = 0;

function someFunc(){	

	$(divs[currentIndex]).show();
	console.log(divs[currentIndex]);
	if (currentIndex<3){
		$(divs[currentIndex-1]).hide();
		currentIndex++;
	} else{
		$(divs[currentIndex-1]).hide();
		currentIndex = 0;
	}	

}


setInterval(someFunc, 1000);