$(document).ready(function(){
	$('#search-form').on('submit',function(e){
		e.preventDefault();

		var query = $('#query').val();
		$('p').text(query);
	});
});