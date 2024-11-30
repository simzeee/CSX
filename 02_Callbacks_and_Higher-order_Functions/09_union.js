// ADD CODE HERE
const union = (arr) => {
  // start with an empty array
  // if the element isn't in there, ad dit
  return arr.reduce(
    (accu, current) =>
      accu.concat(current.filter((ele) => !accu.includes(ele))),
    []
  );
};

// function union(arrays) {
//   return arrays.reduce((acc, currentArray) =>
//     acc.concat(currentArray.filter(element => !acc.includes(element))), []
//   );
// }

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
