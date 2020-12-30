
jQuery(function($){


  /* ----------------------------------------------------------- */
  /*  1. FIXED NAVBAR 
  /* ----------------------------------------------------------- */
    
    
    jQuery(window).bind('scroll', function () {
      if (jQuery(window).scrollTop() > 200) {
          jQuery('.main-navbar').addClass('navbar-bg');
          jQuery('.top-header').addClass('navbar-brand-small');
          jQuery('.nav-logo').addClass('logo-small');     
        } else {
            jQuery('.main-navbar').removeClass('navbar-bg');          
            jQuery('.top-header').removeClass('navbar-brand-small');
            jQuery('.nav-logo').removeClass('logo-small');            
        }
    });
  
  /* ----------------------------------------------------------- */
  /*  2. TOP SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.top-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,     
      autoplay: true,
      fade: true,
      cssEase: 'linear'
    });

  /* ----------------------------------------------------------- */
  /*  3. ABOUT US (SLICK SLIDER)
  /* ----------------------------------------------------------- */      

    jQuery('.abtus-slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      fade: true,      
      cssEase: 'linear'
    });
  /* ----------------------------------------------------------- */
  /*  6. TESTIMONIAL SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.testimonial-slider').slick({
      dots: true,      
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 500,      
      cssEase: 'linear'
    });       

  /* ----------------------------------------------------------- */
  /*  7. COUNTER
  /* ----------------------------------------------------------- */

    jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });


  /* ----------------------------------------------------------- */
  /*  10. MENU SMOOTH SCROLLING
  /* ----------------------------------------------------------- */ 

    //MENU SCROLLING WITH ACTIVE ITEM SELECTED

      // Cache selectors
      var lastId,
      topMenu = $(".main-nav"),
      topMenuHeight = topMenu.outerHeight()+13,
      // All list items
      menuItems = topMenu.find('a[href^=\\#]'),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

      // Bind click handler to menu items
      // so we can get a fancy scroll animation
      menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
        jQuery('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 1500);           
         jQuery('.navbar-collapse').removeClass('in');  
        e.preventDefault();
      });

      // Bind to scroll
      jQuery(window).scroll(function(){
         // Get container scroll position
         var fromTop = $(this).scrollTop()+topMenuHeight;
         
         // Get id of current scroll item
         var cur = scrollItems.map(function(){
           if ($(this).offset().top < fromTop)
             return this;
         });
         // Get the id of the current element
         cur = cur[cur.length-1];
         var id = cur && cur.length ? cur[0].id : "";
         
         if (lastId !== id) {
             lastId = id;
             // Set/remove active class
             menuItems
               .parent().removeClass("active")
               .end().filter("[href=\\#"+id+"]").parent().addClass("active");
         }           
      });


    
  /* ----------------------------------------------------------- */
  /*  12. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     
    //Click event to scroll to top

    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  /* ----------------------------------------------------------- */

   jQuery(window).load(function() { // makes sure the whole site is loaded      
      jQuery('#preloader-area').delay(1000).fadeOut('slow'); // will fade out      
    });
  
});
