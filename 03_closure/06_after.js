// ADD CODE HERE
const after = (numTimes, callback) => {
  let counter = 0;

  return function (...param) {
    counter++;
    console.log(counter);
    if (counter >= numTimes) {
      return callback(...param);
    }
  };
};

const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed
