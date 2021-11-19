$(function () {
    $('.menulist__orders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1030,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
              }
            },
            {
                breakpoint: 715,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: false,
                }
              },
          ]
    });
    $('.comments__sliders').slick({
        
        arrows: false, 
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.burger').on('click', function(){
        $('.menu').toggleClass('active');
    });
})