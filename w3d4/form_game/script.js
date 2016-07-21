var funnyStuff = [""]

$(document).ready(function(){
	$('#user-entry').on('submit',function(e){
		e.preventDefault();
		
		var noun1 = $("#noun1").val();
		var noun2 = $("#noun2").val();
		var verb = $("#verb").val();

		var searchTerm = $("#searchTerm").val();

		$.ajax({
			url: "https://api.spotify.com/v1/search",
			data: {
				q: searchTerm,
				type: 'track'
			},
			success: function(response){
				console.log(response.tracks.items[0].preview_url);
			}
		});

		$("#noun1Output").html(noun1);
		$("#noun2Output").html(noun2);
		$("#verbOutput").html(verb);

		
		$("#funny-output").show();

	});
});