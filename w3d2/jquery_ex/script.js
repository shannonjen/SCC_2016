$(document).ready(function(){
	$('#search-form').on('submit',function(e){
		e.preventDefault();
		// $('h1').text($('#query').val());
		// var color = $('#query').val();
		// $('body').css("background-color",color);
		$('#results').html('<ul><li>Album 1</li><li>Album 2</li></ul>')
	});
});