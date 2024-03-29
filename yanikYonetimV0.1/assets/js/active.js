/*************************************


Version: 1.0

NOTE: This is active js file of the Zeta Tech.
Aamir Raheel

****************************************/

(function ($) {
	"use strict";
    
    var $window = $(window),
            $body = $('body');

    $(document).on('ready', function(){
        
         /*=============================
                 Aamir Raheel /BPO/SI/IN-OUT
        ==============================*/
        
        $('.collapseSection').on('click', function (e) {
            e.preventDefault();
            var thisHref = $(this).attr("href");
            if ($(this).hasClass("active")) {
                $(thisHref).slideUp();
                $('.collapseSection').removeClass("active");
            } else {
                $('.collapseSection').removeClass("active");
                $(this).addClass("active");
                $(".collapseAbleSection").slideUp();
                $(thisHref).slideDown(function () {
                    $('html, body').stop().animate({
                        scrollTop: $(thisHref).offset().top - 1
                    }, 1000);									
                });
            }
        });
        
        /*=============================
                Sticky header
        ==============================*/
        
         $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function() {
          if ($(".navbar").offset().top > 120) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
        
        /*=============================
                smoth scroll js
        ==============================*/
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 10
            }, 1000);
            e.preventDefault();
            
        
        });
        
        /*=============================
                jquery scroll spy
        ==============================*/
        $body.scrollspy({
        
            target : ".navbar-collapse",
            offset : 95
        
        });
        
       /*=============================
                mobile menu fix
        ==============================*/
        $(".navbar-toggle").on("click", function(){
        
            $body.addClass("mobile-menu-activated");
        
        });
        
        $("ul.nav.navbar-nav li a").on("click", function(){
        
            $(".navbar-collapse").removeClass("in");
        
        });
        
        /*========================================
                background-image solution
        ==========================================*/
            var bg = jQuery("#home");
            function resizeBackground() {
                bg.height(jQuery(window).height() + 60);
          }
          resizeBackground();
        
       /*================================
                parallax
        =================================*/
        $window.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
        
        /*================================
               active slider
        =================================*/
        $(".lite-slides-area").owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
            autoHeight: false
        });
        
        /*===== active slider animation =====*/
        $(".lite-slides-area").on("translate.owl.carousel", function(){
            $(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide-item .slide-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".lite-slides-area").on("translated.owl.carousel", function(){
            $(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide-item .slide-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        
        /*================================
                active counter
        =================================*/
		$('.stat-area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
        
        /*================================
               active testimonial
        =================================*/
        $(".testimonial-list").owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });
        
        /*================================
              logo carousel active
        =================================*/
        $(".logo-carousel").owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        });
        
        /*================================
              project slider active Busines Dev
        =================================*/
        $(".bd-slides").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:true,
            autoplay:true,
            autoplayTimeout: 1800, 
             mouseDrag: true,
            touchDrag: true
        });
        
        
/* testig */
        
                /*================================
              project slider active Busines Dev
        =================================*/
        $(".test-slides").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:true,
            autoplay:true,
            autoplayTimeout: 1800, 
             mouseDrag: true,
            touchDrag: true
        });
        
        
        
        
        
        
        
                /*================================
              project slider active Finanice & Acocunts
        =================================*/
        $(".fa-slides").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:true,
            autoplay:true,
             autoplayTimeout: 1800, 
             mouseDrag: false,
            touchDrag: true 
            
        });
        
               
                /*================================
              project slider active Tech-Support
        =================================*/
        $(".ts-slides").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:true,
            autoplay:true,
             autoplayTimeout: 1800, 
             mouseDrag: false,
            touchDrag: true
        });
        
        
                       
                /*================================
              project slider active Tech-Support
        =================================*/
        $(".rs-slides").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:true,
            autoplay:true,
             autoplayTimeout: 1800, 
             mouseDrag: false,
            touchDrag: true
        });
        
        
        
        
                        /*================================
              project slider active Corporte - Integrated_sol
        =================================*/
        $(".corp-is-slides").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:true,
            autoplay:true,
             autoplayTimeout: 1800, 
             mouseDrag: false,
            touchDrag: true
        });
        
        
        
        
        
              /*================================
              project slider active
        =================================*/
        $(".project-slides1").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:true,
            autoplay:true,
             autoplayTimeout: 1800, 
             mouseDrag: false,
            touchDrag: false
        });
        
                      /*================================
              project slider active2
        =================================*/
        $(".project-slides2").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:false,
            autoplay:true,
             autoplayTimeout: 1800, 
             mouseDrag: false,
            touchDrag: false
        });
        
                      /*================================
              project slider active3
        =================================*/
        $(".project-slides3").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots:false,
            autoplay:true,
             autoplayTimeout: 1800, 
             mouseDrag: false,
            touchDrag: false
        });
        
        /*================================
              mixItUp active
        =================================*/
         $('.work-inner').mixItUp();

        /*================================
             jQuery ajaxChimp 
        =================================*/
        var chimpForm = $('.subscription-form');
        chimpForm.ajaxChimp({
          callback: function(){
            var panel = $('.js-result');
            setTimeout(function () {
              panel.removeClass("error").removeClass("success");
            }, 4000);
          },
          language: 'cm',
          url: 'http://hasanbitm144.us15.list-manage.com/subscribe/post?u=d2ca262cb6a6f8a462c7e5f70&amp;id=28919d1386'
          //XXX.us13.list-manage.com/subscribe/post?u=YYY&amp;id=ZZZ
        });
        $.ajaxChimp.translations.cm = {
          'submit': 'Submitting...',
          0: 'We have sent you a confirmation email',
          1: 'Please enter a value',
          2: 'An email address must contain a single @',
          3: 'The domain portion of the email address is invalid (the portion after the @: )',
          4: 'The username portion of the email address is invalid (the portion before the @: )',
          5: 'This email address looks fake or invalid. Please enter a real email address'
        };
        
        /*================================
             wow js active
        =================================*/
        new WOW({ mobile: false }).init();

    });


    $(window).on('load', function(){
        
        /*================================
             preloader
        =================================*/
        $('.spinner').fadeOut(); 
        $('.preloader-wrapper').delay(150).fadeOut(500);
        $body.delay(350).css({'overflow':'visible'});
        
    });


}(jQuery));	