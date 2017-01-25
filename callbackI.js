function two(callback) {
	var count = 1;
	console.log('count = ' + count); // print 1
	callback(); // print callback run
}

// execute two() and pass a function as a parameter
two(function() {
	console.log('callback run');
});