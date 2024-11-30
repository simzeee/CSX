const countBy = (arr, callback) => {
  const result = {};
  arr.forEach((ele) => {
    if (result[callback(ele)] === undefined) {
      result[callback(ele)] = 1;
    } else {
      result[callback(ele)] = result[callback(ele)] + 1;
    }
  });
  return result;
};

function countByGPT(array, callback) {
  return array.reduce((acc, element) => {
    const key = callback(element); // Get the key from the callback
    acc[key] = (acc[key] || 0) + 1; // Increment the count for this key
    return acc;
  }, {});
}

function parity(num) {
  return num % 2 === 0 ? "even" : "odd";
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const counts = countBy(arr, parity);

console.log(counts); // Output: { odd: 4, even: 3 }
