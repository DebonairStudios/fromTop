//fromTop() Version 1.1 jQuery function. 
jQuery(function ($) {
$.fn.fromTop = function(config){
	var windowTop  = $(window).scrollTop(), 
	targetTop = $(this).offset().top, 
	distance = (targetTop - windowTop);
	if(distance <= config.start){
	config.success();
	}
	else config.fail();
	return this;
	}
});
