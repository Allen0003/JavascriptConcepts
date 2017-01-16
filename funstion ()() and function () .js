function add() {
	console.log('part 1');
	// return 一定要
	return function() {
		console.log('part 2');
		return function() {
			console.log('part 3');
		}
	}
}

add(); 
console.log('---------------------'); 
// part 1 
add()(); // 兩個 () 第一個執行 return 外面的 第二個執行 return 裡面的 
console.log('---------------------'); 
// part 1 part 2 

add()()(); // 三個 () 第一個執行 return 外面的 第二個執行 return 裡面的 
console.log('---------------------'); 
// part 1 part 2  part 3 

console.log('---------------------'); 
var one = add(); 

one(); 
// part 1 part 2
