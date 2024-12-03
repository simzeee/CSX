// ADD CODE HERE
const createFunctionWithInput = (param) => {
  return function () {
    return param;
  };
};

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput("sample");
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput("hello");
console.log(helloFunc()); // should log: 'hello'
