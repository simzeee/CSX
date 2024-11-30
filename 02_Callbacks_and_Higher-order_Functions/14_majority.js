const majority = (arr, callback) => {
  let count = 0;
  arr.forEach((ele, idx) => {
    if (callback(ele)) {
      count++;
    }
  });
  return count > arr.length / 2;
};

// GPT
function majority(array, callback) {
  return (
    array.reduce((result, item, index, arr) => {
      const count = callback(item) ? result + 1 : result - 1;
      // Early exit if the majority decision is reached
      if (Math.abs(count) > (arr.length - index - 1) / 2) {
        return count > 0;
      }
      return count;
    }, 0) > 0
  );
}
