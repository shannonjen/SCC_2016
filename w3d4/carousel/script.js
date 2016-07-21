//array of the divs with a class of color-div
var divs = $('.slide');
//counter to keep track of the number 
//of the array item we are on
var currentIndex = 0;

function someFunc(){	
	if(currentIndex<divs.length){
		$(divs[currentIndex]).show();
		$(divs[currentIndex-1]).hide();
		currentIndex++;
	} else {
		$(divs[currentIndex-1]).hide();
		currentIndex=0;
		$(divs[currentIndex]).show();
		currentIndex++;
	}
}


setInterval(someFunc, 1000);