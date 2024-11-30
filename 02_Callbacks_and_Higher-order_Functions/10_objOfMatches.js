const objOfMatches = (arr1, arr2, callback) => {
  const result = {};
  arr1.forEach((ele, id) => {
    if (callback(ele) === arr2[id]) {
      result[ele] = arr2[id];
    }
  });
  return result;
};

// Uncomment these to check your work!
const arr1 = ["hi", "howdy", "bye", "later", "hello"];
const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
