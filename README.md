# fromTop()
A simple jquery function to run a function when the selected element is scrolled into the page.
Use the function like so:
```
$(window).scroll(function(){
	$('main').fromTop(100,function(){
		//Code Here
	})
});
```
The function returns a variable called `scrollActive`, which tells you when the element is in the viewport.
The above code returns true when the element `main` is 100px from the top of the window.
To use the `scrollActive` variable:
```
$('main').fromTop(56,function(){
		if(scrollActivated==true) $('nav').addClass("navdark"); 
		//Adds class when main is 56px or less from the top of the window
		else $('nav').removeClass("navdark");
		//Removes class when main is more then 56px from the top of the window
	})
```

