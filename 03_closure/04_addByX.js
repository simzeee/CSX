// ADD CODE HERE
const addByX = (num) => {
  return function (num2) {
    return num + num2;
  };
};

const addByTwo = addByX(2);
console.log(addByTwo);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1));

// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2));
