# fromTop()
A simple jquery function to run a function when the selected element is scrolled into the page.     
Use the function and its configurations like so:
```
$(window).scroll(function(){
$('main').fromTop({
		"start":56, //Sets the height from the windows top where the function is called
		"log":true, //Sets the log configuration. Used for debugging, it prints the elements position status into the console
		"inside":function(){ //This function runs whenever fromTop() is called and the target element is inside the "start" area
			$('nav').addClass("navdark");
		},
		"outside":function(){//This function runs whenever fromTop() is called and the target element is outside the "start" area
			$('nav').removeClass("navdark");
		},
		"enter":function(){//This function runs the only when the element enters the start area
			alert("Enter");
		},
		"exit":function(){//This function runs the only when the element leaves the start area
			alert("Exit")
		}
	});
});
```

