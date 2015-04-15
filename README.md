# fromTop().js
A simple jquery function to run a function when the selected element is scrolled into the page.     
Use the function and its configurations like so:
```javascript
$(window).scroll(function(){
$('main').fromTop({
		start:100, //Sets the height from the windows top where the inside function is called
		end: -300, //Sets the end height for viewport range from TOP of element. The log method is helpful in finding the wanted number. Usually a negative value.
		log:true, //Sets the log configuration. Used for debugging, it prints the elements position status into the console
		inside:function(){ //This function runs whenever fromTop() is called and the target element is inside the "start" area
			$('nav').addClass("navdark");
		},
		outside:function(){//This function runs whenever fromTop() is called and the target element is outside the "start" area
			$('nav').removeClass("navdark");
		},
		enter:function(){//This function runs the only when the element enters the start area
			alert("Enter");
		},
		exit:function(){//This function runs the only when the element leaves the start area
			alert("Exit")
		}
	});
});
```
http://dev.debonairstudios.com/fromTop/
