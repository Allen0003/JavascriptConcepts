In javascript there is another way to declare the global variabe that call with. 
Here is the examples from MDN below. 


with (expression) { 
  statement 
} 

expression 
	Adds the given expression to the scope chain used when evaluating the
	statement. The parentheses around the expression are required.
statement 
	Any statement. To execute multiple statements, use a block statement ({ ... }) 
	to group those statements. 



easy example 

with (document.body.style) {
	backgroundColor = "rgba(0,0,0,0)";
	backgroundImage = "url(icoding.gif)";
}

equal 

var bs = document.body.style;
bs.backgroundColor = "rgba(0,0,0,0)";
bs.backgroundImage = "url(icoding.gif)";


or use jquery 

$("body").css({
	"background-color" : "rgba(0,0,0,0)",
	"background-image" : "url(icoding.gif)"
});


But in the jquery api. There isn't with inside the code. 
So when use with syntax reconsider it. 


MDN reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with 
