// ADD CODE HERE
const defineFirstArg = (callback, arg) => {
  return (...more) => {
    // invoke the passed-in function with the passed-in argument
    // console.log(deepArg)
    return callback(arg, ...more);
  };
};

// Uncomment these to check your work!
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15
