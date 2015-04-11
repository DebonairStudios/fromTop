//fromTop() Version 1.1 jQuery function. 
jQuery(function ($) {
	function log(data){
		 console.log(data);
	}
	$.fn.fromTop = function(config){
		var windowTop  = $(window).scrollTop(), 
		targetTop = $(this).offset().top, 
		distance = (targetTop - windowTop);
		window.enterViewpane;
		if(!config.start){
			console.warn("fromTop() WARNING: A height from top to fire function should be specified with the \"start\" configuration. Default has been set to 0");
			config.start=0;
		}
		if(distance <= config.start){
			if(config.inside) config.inside();
			if(config.enter && window.enterViewpane !==true){
				window.enterViewpane=true;
				config.enter();
				if(config.log) if(config.log==true) log("fromTop() Enter: Element has entered the viewpane.");
			}
			if(config.log) if(config.log==true) log("fromTop() TRUE: Is within "+config.start+"px from top of window");
		}
		else{
			if(config.outside) config.outside();
			if(config.exit && window.enterViewpane==true){
				config.exit();
				window.enterViewpane=false;
				if(config.log) if(config.log==true) log("fromTop() Exit: Element has exited the viewpane.");
			}
			if(config.log) if(config.log==true) log("fromTop() FALSE: Is over "+config.start+"px from top of window");
		}
		return this;
	}
});
