$(document).ready(function(){

	$('#todo-form').on('submit',function(e){
		e.preventDefault();
		// $('h1').text($('#query').val());
		var todo = $('#add-todo').val();
		$('#add-todo').val("");

		// $('body').css("background-color",color);
		$('#todo-list').append('<li>'+todo+'</li>');
	});

});