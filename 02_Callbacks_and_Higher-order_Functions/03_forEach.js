// ADD CODE HERE

const forEach = (arr, callbackForEach) => {
  for (let i = 0; i < arr.length; i++) {
    callbackForEach(arr[i]);
  }
};

const map = (arr, callbackMap) => {
  const result = [];
  forEach(arr, function (ele) {
    result.push(callbackMap(ele));
  });
  return result;
};
console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]

// Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]
