$(document).ready(function(){
	//array of the divs with a class of color-div
	var slides = $('.slide');
	//counter to keep track of the number 
	//of the array item we are on

	var currentIndex = 0;

	function slideShow(){	
		//hide the currently displayed slide
		$(slides[currentIndex]).fadeOut();
		//if this is the last slide in the array, reset the index to 0
		if(currentIndex===slides.length-1){
			currentIndex=0;
		//else, add one to the index
		} else {
			currentIndex++;
		}
		//show the next slide
		$(slides[currentIndex]).fadeIn();
	}

	setInterval(slideShow, 4000);

});




