//fromTop() Version 1.1 jQuery function. 
jQuery(function ($) {
	function log(data){
		 console.log(data);
	}
	$.fn.fromTop = function(config){
		var windowTop  = $(window).scrollTop(), 
		targetTop = $(this).offset().top, 
		distance = (targetTop - windowTop);
		if(distance <= config.start){
			config.inside();
			if(config.log==true) log("In Viewport");
		}
		else{
			config.outside();
			if(config.log==true) log("Not In Viewport");
		}
		return this;
	}
});
