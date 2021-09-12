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

  // darkmode a implementar
  var dark_mode = 0;
  $("#darkmode").click(function () {
    if (dark_mode == 0) {
      $("main").css("background-image", "linear-gradient(#0E2F59, #36486d)");
      $("main").css("color", "grey");
      $("#barra-navegacao").css("background-image", "linear-gradient(#0E2F59, #36486d)");
      $("#lateral").css("background-image", "linear-gradient(#0E2F59, #36486d)");
      $("#lateral p").css("color", "grey");
      $(".copyright").css("color", "lightgrey");
      $(".card").addClass("bg-secondary").addClass("text-white");
      $("header").css("background-image", "linear-gradient(#0E2F59, #36486d)");
      $("footer").css("background-image", "linear-gradient(#0E2F59, #36486d)");
      dark_mode = 1;

    }
    else {
      $("header").css("background-image", "linear-gradient(to right,#ffe18ed4, #7ec566)");
      $("main").css("background-image", "linear-gradient(to bottom,#f7f3e5, rgba(255, 225, 0, 0.629))");
      $("main").css("color", "black");
      $("#barra-navegacao").css("background-image", "linear-gradient(to bottom,#7ec566,rgba(233, 36, 36, 0.96))");
      $("#lateral").css("background-image", "inherit");
      $("#lateral p").css("color", "inherit");
      $("#rodape").css("background-image", "linear-gradient(#d3ae4854,#d3ae4854)");
      $(".card").addClass("bg-white").addClass("text-dark");
      $(".copyright").css("color", "inherit");
      dark_mode = 0;
    }
  });//darkmode


//codigo carroulsel
$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    items:1,
    smartSpeed: 300,
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