// Add code here
const runInOrder = (functions, nums) => {
  let time = 0;

  for (let i = 0; i < functions.length; i++) {
    // I needed to accumulate time
    time += nums[i];
    setTimeout(functions[i], time);
  }
};

function sayHi() {
  console.log("hi");
}
function sayBye() {
  console.log("bye");
}
function sayHowdy() {
  console.log("howdy");
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
