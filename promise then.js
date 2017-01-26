*** Promise 異步執行 ***

'同步'執行函式的結果要不就是'回傳一個值'，要不然就是執行到一半發生'例外'，中斷目前程式然後拋出例外。


'異步'執行函式的結果要不就是帶有'回傳值的成功'，要不就是帶有'回傳理由的失敗'。


promise 物件最後的結果要不然就用一個回傳值來fulfilled(實現)，
要不然就用一個理由(錯誤)來rejected(拒絕)。


Promise的實作中，會確保Promise物件一實體化後就會固定住狀態，要不就是"已實現"，要不就是"已拒絕"


const promise = new Promise(function(resolve, reject) {
  // success
  resolve(value)
  // failure
  reject(reason)
});

promise.then(function(value) {
  // on fulfillment
}, function(reason) {
  // on rejection
})



*** then ***

p.then(onFulfilled[, onRejected]);

p.then(function(value) {
   // fulfillment
  }, function(reason) {
  // rejection
});

If onFulfilled or onRejected throws an error, or returns a Promise which
rejects, then returns a rejected Promise.

If onFulfilled or onRejected returns a Promise which resolves, or returns any
other value, then returns a resolved Promise.

