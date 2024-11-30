const multiMap = (arrVals, arrCallback) => {
  const obj = {};
  arrVals.forEach((ele, id) => {
    obj[ele] = arrCallback.map((arrCB, id) => arrCB(ele));
  });
  return obj;
};
