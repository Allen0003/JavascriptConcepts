function add() {
	var count = 0;
	return function() {
		console.log(count = count + 1);
		console.log('closure');
	};
};
add()();
// 1 closure
add()();
// 1 closure
var one = add();
one(); // 1 closure

// 因為沒有在宣告了~~~
one(); // 2 closure