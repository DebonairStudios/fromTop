//fromTop() Version 1.1.1 jQuery function. Made with ❤ by Debonair Studios :D http://debonairstudios.com
//Documentation, examples, and randomness can be found at http://dev.debonairstudios.com/fromTop/
//fromTop().js Copyright (c) Jacob Gray
jQuery(function ($) {
	function log(data){
		 console.log(data);
	}
	$.fn.fromTop = function(config){
		var windowTop  = $(window).scrollTop(), 
		targetTop = $(this).offset().top, 
		distance = (targetTop - windowTop),
		end = config.end || 0;
		window.enterViewpane;
		if(!config.start){
			console.warn("fromTop() WARNING: A height from top to fire function should be specified with the \"start\" configuration. Default has been set to 0");
			config.start=0;
		}
		if(config.start<=config.end){
			console.error("fromTop() ERROR: The config.end method CANNOT be more then the config.start method!");
			return false;
		}
		if(distance <= config.start && distance >= end){
			if(config.inside) config.inside();
			if(config.enter && window.enterViewpane !==true){
				window.enterViewpane=true;
				config.enter();
				if(config.log && config.log===true) log("fromTop() Enter: Element has entered the viewpane.");
			}
			if(config.log && config.log===true) log("fromTop() TRUE: Is "+distance+"px from top of window");
		}
		else{
			if(config.outside) config.outside();
			if(config.exit && window.enterViewpane===true){
				config.exit();
				window.enterViewpane=false;
				if(config.log) if(config.log===true) log("fromTop() Exit: Element has exited the viewpane.");
			}
			if(config.log) if(config.log===true) log("fromTop() FALSE: Is "+distance+"px from top of window");
		}
		return this;
	}
});

