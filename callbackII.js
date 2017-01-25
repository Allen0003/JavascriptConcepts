function two(callback) {
	// check the paramete is function or not. If so then do callback();
	if (callback && typeof (callback) === "function") {
		callback();
	}
	console.log(' typeof = ' + typeof (callback));
}

function three() {
	console.log('three run');
}
// first time call two()
two(function() {
	console.log('callback run');
});
// second call two()
two(three);
// should't do callback()
two("aaa");