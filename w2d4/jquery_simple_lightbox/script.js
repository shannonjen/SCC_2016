// ensures the entire html document is loaded
// before we start messing around with the elements
// with our code
// attaching event listeners
// making elements hide and show
$(document).ready(function() {

  // sets an event handler that responds to clicking an
  //  anchor
  $("a").on("click",function(){
    // gets the current element that was clicked
    //  then gets the value of the attribute "img-url"
    
    
    var imageUrl = $(this).data("img-url");

    $("#lightbox-image").attr('src', imageUrl);

    $(".lightbox").show();

    $(".lightbox").on("click",function(){
      $(".lightbox").hide();
    });

  });

});