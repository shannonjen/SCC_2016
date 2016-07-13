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
var colors = ["red", "blue", "orange", "green", "yellow"];
// someRunner(someOtherFunction);

$(document).ready(function(){
// jquery magic happens here
	$('img').click(function(){
		$('p').slideUp(4000);
		$('ul').fadeOut(6000);
		$('body').css("background-color","red");
		for(var i=0; i<colors.length; i++){
			$('body').css("background-color",colors[i]);
			alert("Color time!");
			console.log(i);

		}
		$('body').css("width","10px");
		$('img').css("width","600px");
		$('h1').text("big monkey");

	});

	

	$(".menu").show(function(){
		$(".menu").animate({ opacity: 0.5});
	});
});