// Add code here
const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

const delays = [200, 500, 0, 350];

const delayLog = (delayTime, i) => {
  setTimeout(() => console.log(`printing element ${i}`), delayTime);
};

forEach(delays, delayLog);
