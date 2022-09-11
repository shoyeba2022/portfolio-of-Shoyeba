$(document).ready(function(){
    $(window).scroll(function(){
        //========= sticky navbar on scroll script =========
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        //========= scroll-up button show/hide script =========
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //========= slide-up script =========
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        //========= removing smooth scroll on slide-up button click =========
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        //========= applying again smooth scroll on menu items click =========
        $('html').css("scrollBehavior", "smooth");
    });

    //========= toggle menu/navbar script =========
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //========= typing text animation script ========= 
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Web Developer", "Blogger", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Web Developer", "Blogger", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //========= owl carousel script =========
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end:    100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options );

        var thisElement = $(this);

        $({count: settings.start}).animate({count: settings.end}, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };

    $('#number1').jQuerySimpleCounter({end: 21,duration: 3000});
    $('#number2').jQuerySimpleCounter({end: 15,duration: 3000});
    $('#number3').jQuerySimpleCounter({end: 49,duration: 2000});
    $('#number4').jQuerySimpleCounter({end: 120,duration: 2500});

 });   
    //=========view resume=====
    function toggle(){
        var resume= document.querySelector(".video-resume")
        var video= document.querySelector("video")
        resume.classList.toggle("active");
        video.pause();
        video.currentTime = 0;
    }

    //==============Click Menu-btn and Scroll-up-btn Hide/Show ===========
   $('.menu-btn ').click(function(){
        $('.scroll-up-btn').toggle();
    });

    /*========Disable Mouse Right Click=======
    document .addEventListener("contextmenu",function(e){
        e.preventDefault();
    })*/

/*========= ======== End JavaScript ========== ========== =======*/
