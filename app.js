$(document).ready(function () {
    $('.product-slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type=z'button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

// $(document).ready(function(){
//     // slider two
//     $('.product-widget-slick').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // autoplay: true,
//         // fade: true,
//         // autoplaySpeed: 2000,
//     //   dots: true,
//         arrows:false
//     });
     
//         $('.slick-prev').click(function(e){ 
//               //e.preventDefault(); 
//             $('.product-widget-slick').slick('slickPrev');
//         } );
        
//         $('.slick-next').click(function(e){
//             //e.preventDefault(); 
//             $('.product-widget-slick').slick('slickNext');
//         } );  
      
      
// });

$(document).ready(function(){
    // slider two
    $('.product-widget-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // fade: true,
        // autoplaySpeed: 2000,
    //   dots: true,
        arrows:false
    });
     
        $('.slick-prev1').click(function(e){ 
              //e.preventDefault(); 
            $('.pws1').slick('slickPrev');
        } );
        $('.slick-next1').click(function(e){
            //e.preventDefault(); 
            $('.pws1').slick('slickNext');
        } );  
      
        $('.slick-prev2').click(function(e){ 
            //e.preventDefault(); 
          $('.pws2').slick('slickPrev');
        } );
        $('.slick-next2').click(function(e){
            //e.preventDefault(); 
            $('.pws2').slick('slickNext');
        } );  

        $('.slick-prev3').click(function(e){ 
            //e.preventDefault(); 
          $('.pws3').slick('slickPrev');
        } );
        $('.slick-next3').click(function(e){
          //e.preventDefault(); 
          $('.pws3').slick('slickNext');
        } );  
});



