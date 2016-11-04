
$(document).ready(function() {

//Function for the owlCarousel to be slided
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
  
// Function for the counter up part

  $('.counter').counterUp({
    delay: 10,
    time: 1000
 });

 
});


$(window).scroll(function() {

//Function for scroll up button to be desapeared and reappeared
//Function for making the button work in line 60

	  $(window).scroll(function(){
                    if($(this).scrollTop()>200){
                        $(".scroll-top").fadeIn();
                }   else{
                        $(".scroll-top").fadeOut();
                }
            })


//Function for skillbar to be loded

   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1700);
	});
});

   }

});

//Function for scroll up button to work when being cliked

$(".scroll-top").click(function(){
            $("html, body").animate({
                scrollTop: 0
            },600);
            return false;
        });




//smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});