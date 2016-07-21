//array of the divs with a class of color-div
var divs = $('.color-div');
//counter to keep track of the number 
//of the array item we are on
var counter = 0;

function someFunc(){	

	$(divs[counter]).show();
	console.log(divs[counter]);
	if (counter<3){
		$(divs[counter-1]).hide();
		counter++;
	} else{
		$(divs[counter-1]).hide();
		counter = 0;
	}	

}


setInterval(someFunc, 1000);