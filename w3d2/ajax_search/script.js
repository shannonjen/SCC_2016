$(document).ready(function(){

	$("#movie-form").on("submit", function(e){
		//prevents default behavior of form submit button
		e.preventDefault();
		//pulls out the value entered input box
		var movie = $("#movie-input").val();
		//makes a call to ombdapi with requested movie
		$.ajax({
			type: "GET",
			url: "http://www.omdbapi.com/?",
			data: {
				t: movie
			},
			//returns a json response on success
			success: function(response){

				console.log(response.Poster);
				//selects image element and changes src attribute to moie poster image
				$('img').attr("src",response.Poster);
			}
		});

	});
	



});