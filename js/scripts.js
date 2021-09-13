$(function(){
  
//Gabriel 
$(window).scroll(function(){
    if ($(document).scrollTop() > 100) {
      $("#icone_subir").css("display", "block");
    } else {
      $("#icone_subir").css("display", "none");
    }
  });
  //fim scroll
  //smooth scrool  
  // Add smooth scrolling to all links
  $("#icone_subir a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });//icone subir click

//codigo carroulsel
$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    items:1,
    smartSpeed: 450,
    nav: true,
    dots: true,
    loop: true,
    animateIn: 'flipInX',
    animateOut: 'zoomOutDown'
});
$('.owl-carousel').on('mousewheel', 'owl-stage', function (e){
    if(e.deltaY>0) {
        $('.owl-carousel').trigger('next.owl');
    }else{
        $('.owl-carousel').trigger('prev-owl');
    }
    e.preventDefault();
});



});//$(function) #######.todos os codigos em cima dessa linha ###########################