$(document).ready(function(){

	$("#movie-form").on("submit", function(e){
		e.preventDefault();
		var movie = $("#movie-input").val();
		$.ajax({
			type: "GET",
			url: "http://www.omdbapi.com/?",
			data: {
				t: movie
			},
			success: function(response){
				console.log(response.Poster);
				$('#image-holder').html("<img src="+response.Poster+">");
			}
		});

	});
	



});