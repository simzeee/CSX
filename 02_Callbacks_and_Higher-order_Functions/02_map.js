const subtractTwo = (num) => num - 2;
const map = (arr, callback) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }
  return output;
};
