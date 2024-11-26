function mergingTripletsAndQuints(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    let compare = array1[i];

    if (compare % 3 == 0 || compare % 5 === 0) {
      let newEle = compare + array2[i];
      result.push(newEle);
    } else {
      result.push(compare);
    }
  }
  return result;
}

// Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
