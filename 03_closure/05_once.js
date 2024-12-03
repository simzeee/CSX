// ADD CODE HERE

const once = (callback) => {
  let counter = 0;
  let permanentResult = undefined;

  return function (param) {
    if (counter === 0) {
      counter++;
      permanentResult = callback(param);
      return callback(param);
    }

    return permanentResult;
  };
};

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
