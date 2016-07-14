
$(document).ready(function(){
	$('a').on("click",function(){
		$('img').show();
		$('img')
	});
});



























$(document).ready(function(){
	$('a').on("click",function(){
		$('img').show(function(){
			$('img').click(function(){
				$('img').hide();	
			})
		});
	});
});

