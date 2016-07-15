
$(document).ready(function(){
	$('a').on("click",function(e){
		console.log(e);
		var imgUrl = $(this).data("img-url");
		$('img').attr("src",imgUrl);
		$('.lightbox').show();
		$('.lightbox').on("click",function(){
			$('.lightbox').hide();
		});
	});
});



























// $(document).ready(function(){
// 	$('a').on("click",function(){
// 		$('img').show(function(){
// 			$('img').click(function(){
// 				$('img').hide();	
// 			})
// 		});
// 	});
// });

