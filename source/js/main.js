jQuery(document).ready(function() {

    // Social media icosn show on hover/click
    //////////////////////////////////////
    /*jQuery('#search-toggle').click(function() {
    	jQuery(".search-hide").toggleClass("hidden-lg hidden-md");
    });

    jQuery('#social-media').click(function() {
    	// jQuery("#social-toggle").click(function() {
    	jQuery("#navbar-social-media").fadeToggle();
    	//jQuery(".social-media-hide").toggleClass("hidden-sm");
    }).hover(function() {
    	// jQuery("#social-toggle").click(function() {
    	jQuery("#navbar-social-media").fadeOut();
    	//jQuery(".social-media-hide").toggleClass("hidden-sm");
    });*/

    function dynamicToggle(elementId) {
        var target = jQuery(elementId).data("target");
        jQuery(target).toggle();
        return false;
    };

    jQuery("#search-toggle").click(function() {
        dynamicToggle(this);
        jQuery(this).children().toggleClass("fa-search").toggleClass("fa-times");
        return false;
    });

    jQuery('.toggle-menu').jPushMenu({ closeOnClickLink: false });
    jQuery('.dropdown-toggle').dropdown();

    /********************************************************************************/
    /* Dynamic Slick Sliders */
    /********************************************************************************/
    // Initialise Generic Slick Sliders
    //////////////////////////////////////
    jQuery('.slick-std-slider').each(function() {
        // check to ensure slider and navigation are isolated in one element - prevents searching the entire page for .slick-std-slider-nav elements
        if ( jQuery(this).siblings('.figcaption-nav').length>0 || jQuery(this).siblings('.slick-std-slider-nav').length>0 ) {
            var sliderNav = jQuery(this).parent().find('.slick-std-slider-nav');
            //console.log(sliderNav);
            jQuery(this).slick({
                nextArrow: '<!--Defined in main js--><a role="button" class="h4 slick-next slick-std-slider-next" data-role="none" aria-label="Next"><i class="fa fa-chevron-right"></i></a>',
                prevArrow: '<!--Defined in main js--><a role="button" class="h4 slick-prev slick-std-slider-prev" data-role="none" aria-label="Previous"><i class="fa fa-chevron-left"></i></a>',
                appendArrows: sliderNav,
                autoplay: true,
                autoplaySpeed: 10000
            });
        } else {
            //console.log("test");
            jQuery(this).slick({
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
            });
        };
    });
    // Dynamic Slick Next
    jQuery(".slick-next").on("click", function() {
        var target = jQuery(this).data('target');
        jQuery(target).slick('slickNext');
        return false;
    });
    // Dynamic Slick Previous
    jQuery(".slick-prev").on("click", function() {
        var target = jQuery(this).data('target');
        jQuery(target).slick('slickPrev');
        return false;
    });
    // Dynamic Slick Nav
    jQuery(".slick-nav").on("click", function() {
        jQuery(this).parent().siblings().children(".slick-nav").removeClass("active");
        jQuery(this).addClass("active");
        var target = jQuery(this).data('target');
        var targetSlideId = jQuery(this).data('slide');
        var targetSlide = jQuery(target + " " + targetSlideId).data('slick-index');
        jQuery(target).slick("slickGoTo", targetSlide);
        // console.log(index)
        return false;
    });

    /********************************************************************************/
    /* FTE Event Slider */
    /********************************************************************************/
    jQuery('#slick-events').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        ccsEase: 'ease',
        focusOnSelect: true
    });
    // Update Event Slider Navigation Active Class
    jQuery('#slick-events').on('afterChange', function(event, slick, currentSlide){
        // get slide id
        var currentSlideId = (jQuery(slick.$slides.get(currentSlide)).attr('id'));
        // target navigation elements data-slide attribute using slide id
        if ( !jQuery('#slick-events-nav [data-slide="#' + currentSlideId + '"]').hasClass('active') ) {
            jQuery('#slick-events-nav .slick-nav').removeClass('active');
            jQuery('#slick-events-nav [data-slide="#' + currentSlideId + '"]').addClass('active');
        };
    });

    // Event Slider Navigation - Utilises the index of the parent div.col-xx-x
    /*jQuery("#slick-events-nav .fte-primary-link").on("click", function() {
        var index = jQuery(this).parent().index();
        jQuery("#slick-events-nav .fte-primary-link").removeClass("active");
        jQuery(this).addClass("active");
        jQuery("#slick-events").slick("slickGoTo", index);
        // console.log(index);
        return false;
    });*/
    
    // Depreciated
    /*jQuery(".slick-europe-nav").on("click", function() {
        jQuery(".slick-event-slider").slick( "slickGoTo", 0 );
        return false;
    });
    jQuery(".slick-global-nav").on("click", function() {
        jQuery(".slick-event-slider").slick( "slickGoTo", 1 );
        return false;
    });
    jQuery(".slick-asia-expo-nav").on("click", function() {
        jQuery(".slick-event-slider").slick( "slickGoTo", 2 );
        return false;
    });
    jQuery(".slick-ancillary-nav").on("click", function() {
        jQuery(".slick-event-slider").slick( "slickGoTo", 3 );
        return false;
    });*/
    /********************************************************************************/
    /* News Lead Slider */
    /********************************************************************************/
    // News Lead Slider Featured Images
    jQuery('#slick-news-lead-slides').slick({
        arrows: false,
        asNavFor: '#slick-news-lead'
    });
    // News Lead Slider Post Title and Navigation
    jQuery('#slick-news-lead').slick({
        nextArrow: '<!--Defined in main js--><a role="button" class="h2 h4-md h3-xs slick-next slick-news-lead-next" data-role="none" aria-label="Next"><i class="fa fa-chevron-right"></i></a>',
        prevArrow: '<!--Defined in main js--><a role="button" class="h2 h4-md h3-xs slick-prev slick-news-lead-prev" data-role="none" aria-label="Previous"><i class="fa fa-chevron-left"></i></a>',
        appendArrows: jQuery('#slick-news-lead-nav'),
        infinite: true,
        asNavFor: '#slick-news-lead-slides',
        swipe: false,
        fade: true
        //focusOnSelect: true
        //asNavFor: '#slick-news-lead-slides
    });

    /********************************************************************************/
    /* Conference Speakser */
    /********************************************************************************/
    // Conference speakers slider
    /*jQuery('#slick-conference-speakers').slick({
        lazyLoad: 'ondemand',
        centerMode: true,
        centerPadding: '30',
        slidesToShow: 5,
        nextArrow: '<!--Defined in main js--><a role="button" class="slick-next conference-speakers-next" data-role="none" aria-label="Next"><i class="fa fa-chevron-right"></i></a>',
        prevArrow: '<!--Defined in main js--><a role="button" class="slick-prev conference-speakers-prev" data-role="none" aria-label="Previous"><i class="fa fa-chevron-left"></i></a>',
        appendArrows: jQuery('#slick-conference-speakers-nav'),
        ccsEase: true,
        infinite: true,
        focusOnSelect: true,
        asNavFor: '#slick-testimonial-slides',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 768,
                settings: {
                    centerPadding: '30',
                    slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });*/

    /********************************************************************************/
    /* Testimonials */
    /********************************************************************************/
    // Testimonial headshots
    jQuery('#slick-testimonial-speakers').slick({
        lazyLoad: 'ondemand',
        centerMode: true,
        slidesToShow: 5,
        centerPadding: '60px',
        nextArrow: '<!--Defined in main js--><a role="button" class="slick-testimonials-next fte-primary-link" data-role="none" aria-label="Next"><i class="fa fa-chevron-right"></i></a>',
        prevArrow: '<!--Defined in main js--><a role="button" class="slick-testimonials-prev fte-primary-link" data-role="none" aria-label="Previous"><i class="fa fa-chevron-left"></i></a>',
        appendArrows: jQuery('#slick-testimonial-speakers-nav'),
        ccsEase: true,
        infinite: true,
        focusOnSelect: true,
        asNavFor: '#slick-testimonial-slides',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    centerPadding: '60px'
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '10px'
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    jQuery('#slick-testimonial-slides').slick({
        slidesToShow: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '#slick-testimonial-speakers'
    });

    jQuery('#commentform').focusin(function() {
        jQuery(this).children('.commentform-show-on-focus').show();
    });

    jQuery('.conf-day-next').click(function(){
      jQuery('#conf-sessions-navbar .navbar-nav > .active').next('li').find('a').trigger('click');
      return false;
    });

    jQuery('.conf-day-prev').click(function(){
      jQuery('#conf-sessions-navbar .navbar-nav > .active').prev('li').find('a').trigger('click');
      return false;
    });

    jQuery("#conf-sessions-navbar").affix({
        offset: {
            top: jQuery("#conf-sessions").offset().top,
            bottom: jQuery("#conf-sessions").outerHeight()
        }
    });
});