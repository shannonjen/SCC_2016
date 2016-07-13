$(document).ready(function(){
// jquery magic happens here
	$('img').click(function(){
		$('p').slideUp(4000);
		$('ul').fadeOut(6000);
	});
});