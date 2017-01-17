If you want to extend a new method under the jquery library. 

you can use this syntax to add extra method 

example: 

jQuery.fn.extend({ 
  check: function() { 
    return this.each(function() { 
      this.checked = true; 
    }); 
  } 
}); 


The jQuery.fn.extend() method extends the jQuery prototype ($.fn) object 
to provide new methods that can be chained to the jQuery() function.

reference http://api.jquery.com/jquery.fn.extend/