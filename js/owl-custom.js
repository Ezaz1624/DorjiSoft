


$('#owlHome01').owlCarousel({
    
    rtl:false,
    loop:true,
    margin:0,
    nav:true,
    autoplay:false,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    dots:true,
    rewindNav :true,
    arrows:true,
    ltr:true,
    responsive:{
        0:{
            items:1
        },
        664:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#SecondCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    arrows:false,
    autoplay:false,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        992:{
            items:5
        }
    }
})




