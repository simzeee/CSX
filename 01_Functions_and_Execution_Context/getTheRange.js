function getTheRange(arr) {
  const sorted = arr.sort((a, b) => a - b);

  let range = sorted[sorted.length - 1] - sorted[0];

  return [sorted[0], sorted[sorted.length - 1], range];
}

// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
