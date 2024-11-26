function arrayBuilder(obj) {
  let result = [];

  let values = Object.keys(obj);
  let nums = Object.values(obj);
  console.log(values);
  console.log(nums);

  for (let j = 0; j < values.length; j++) {
    for (let i = 0; i < nums[j]; i++) {
      result.push(values[j]);
    }
  }

  return result;
}

// Uncomment these to check your work!
console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
