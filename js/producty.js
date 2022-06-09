$(function(){
    $(window).on('scroll', function(){
        var menuHeight = $('#nav').height();
        var scrollSize = $(window).scrollTop();
        if(scrollSize > menuHeight){
            $('#nav').addClass('fix');
        }else{
            $('#nav').removeClass('fix');
        }
    })
    $('#active_btn').on('click', function(){
        $('#nav_menu ul, #nav .logo').toggleClass('active')
    });
    $('.banner_slider').slick({
        
        arrows:false,
        // prevArrow:'<i class="fa-solid fa-angle-left bIcon"></i>',
        // nextArrow : '<i class="fa-solid fa-angle-right bIcon"></i>'
        
    });
    $('.blog_slider').slick({
        slidesToShow:3,
        centerMode:true,
        centerPadding:'0',
        // autoplay:true,
        prevArrow : $('.blogArrowleft'),
        nextArrow : $('.blogArrowright'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                arrows:false
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                arrows:false,
              }
            }
        ]
    })
    $('.counter').counterUp({
        delay: 30,
        time: 1000
    });
    $('.tesSlider').slick({
        asNavFor: '.profile_nav',
        arrows : false
    })
    $('.profile_nav').slick({
      slidesToShow:3,
      asNavFor:'.tesSlider',
      centerMode: true,
      centerPadding:'10px',
      prevArrow :$('.leftarrow'),
      nextArrow: $('.rightarrow'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
            arrows:false,
          }
        }
      ]
    })
} )