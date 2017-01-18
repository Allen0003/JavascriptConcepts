function one() {
	console.log('global one');
}
function two() {
	console.log('global two');
}
function hoistFun() {
	console.log(" ==================== ");
	console.log(typeof one); // function 
	console.log(typeof two); // undefined
	// Using var here, 
	// function two should be waited until hit him
	// console.log(typeof two) = undefined	
	
	console.log(" ==================== ");
	one(); // local one
	two(); // Exception because of undefined
	
	// override gloable one()
	function one() {
		console.log('local one');
	}
	
	var two = function() {
		console.log('local two');
	}
	
	// throw exception before hit closure 
	return function() {
		console.log('closure');
	};
}
hoistFun()();
