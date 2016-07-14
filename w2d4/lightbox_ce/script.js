
$(document).ready(function(){
	$('a').on("click",function(){
		$('.lightbox').show();
		$('img').on("click",function(){
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

