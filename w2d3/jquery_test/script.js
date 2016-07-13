// $(document).ready(function(){
// // jquery magic happens here
// 	$('img').click(function(){
// 		$('p').slideUp(4000);
// 		$('ul').fadeOut(6000);
// 	});
// });

// var someOtherFunction = function(){
// 	alert('hello world');
// };

// function someRunner(anyFunction){
// 	console.log(2+2);
// 	anyFunction();
// }

// someRunner(someOtherFunction);

$(document).ready(function(){
// jquery magic happens here
	$('img').click(function(){
		$('p').slideUp(4000);
		$('ul').fadeOut(6000);
		$('body').css("background-color","red");
	});

	

	$(".menu").show(function(){
		$(".menu").animate({ opacity: 0.5});
	});
});