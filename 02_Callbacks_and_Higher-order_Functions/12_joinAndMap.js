const joinAndMap = (array1, array2, callback) => {
  const newArray = array1.concat(array2);
  return newArray.map(callback);
};
