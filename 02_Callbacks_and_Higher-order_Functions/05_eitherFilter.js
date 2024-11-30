function eitherFilter(array, callback1, callback2) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback1(array[i]) === true || callback2(array[i]) === true) {
      results.push(array[i]);
    }
  }
  return results;
}
