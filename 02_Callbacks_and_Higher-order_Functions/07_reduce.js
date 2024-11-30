// ADD CODE HERE

const reduce = (arr, callback, initial) => {
  let accumulator = initial;
  console.log(accumulator);
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
    console.log(accumulator);
  }
  return accumulator;
};

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); // should log 8
