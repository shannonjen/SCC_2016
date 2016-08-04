
$(document).ready(function(){
	$('#user-entry').on('submit',function(e){
		e.preventDefault();
		
		var noun1 = $("#noun1").val();
		var noun2 = $("#noun2").val();
		var verb = $("#verb").val();

		var searchTerm = $("#searchTerm").val();
		
		spotifyLookup(searchTerm);
		

		$("#noun1Output").html(noun1);
		$("#noun2Output").html(noun2);
		$("#verbOutput").html(verb);
		$("#searchTerm").html(searchTerm);

		
		$("#funny-output").show();

	});
});

function spotifyLookup(query){
	$.ajax({
			url: "https://api.spotify.com/v1/search",
			data: {
				q: query,
				type: 'track'
			},
			success: function(response){
				console.log(response.tracks.items[0].preview_url);
				var songUrl = response.tracks.items[0].preview_url;
				$('audio').attr("src",songUrl);
				$('audio')[0].play();
			}
		});
}