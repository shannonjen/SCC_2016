
$(document).ready(function() {
  $("a").on("click", function(e) {
    e.preventDefault();
    if (this.hash !== "") {
      var hash = this.hash;
      console.log($(hash).offset().top);
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function() {
        window.location.hash = hash;
      });
    }
  });

});
