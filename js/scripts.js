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