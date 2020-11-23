$('#slider1, #slider2').owlCarousel({
 loop:true,
 margin:20,
 responsiveClass:true,
 responsive:{
     0:{
         items:1,
         nav:true,
         autoplay: true,
     },
     600:{
         items:3,
         nav:false,
         autoplay: true,
     },
     1000:{
         items:5,
         nav:true,
         loop:false,
         autoplay: true,
     }
 }
})