$(document).ready(function(){


	$("#movie-input").on("keyup", function(){
		//prevents default behavior of form submit button
		// e.preventDefault();
		//pulls out the value entered input box
		var movie = $("#movie-input").val();
		//makes a call to ombdapi with requested movie

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
  		'api-key': "33b0e393900a467ba9e476795d9025eb",
  		'q': movie
		});
		$.ajax({
  		url: url,
  		method: 'GET',
		}).done(function(result) {
  		$('#abstract').text(result.response.docs[0].abstract);
		}).fail(function(err) {
  		throw err;
		});

	});
	

});




		// $.ajax({
		// 	type: "GET",
		// 	url: "http://www.omdbapi.com/?",
		// 	data: {
		// 		t: movie
		// 	},
		// 	//returns a json response on success
		// 	success: function(response){

		// 		console.log(response);
		// 		//selects image element and changes src attribute to moie poster image
		// 		$('img').attr("src",response.Poster);
		// 		$('#movie-title').text(response.Title);
		// 		$('#movie-rating').text(response.Rated);
		// 		$('#plot').text(response.Plot);
		// 	}
		// });


