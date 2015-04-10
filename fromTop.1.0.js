//fromTop() Version 1.0 jQuery function. 
jQuery(function ($) {
$.fn.fromTop = function(fromTop, CF){
	var windowTop  = $(window).scrollTop(), 
	targetTop = $(this).offset().top, 
	distance = (targetTop - windowTop);
	window.scrollActivated = false;
	if(distance <= fromTop){
	window.scrollActivated=true;
	}
	else window.scrollActivated=false;
	CF();
	return this;
	}
});
