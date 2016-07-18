
$(document).ready( 
  //Code that executes when the document is ready
  function(){
    // alert('The document is ready!');
    

			$(".cube").on("click", function(){
				var color = $(this).css("background-color"); 
				// console.log(color);
				$('body').css("background-color",color);

			});

	}
);