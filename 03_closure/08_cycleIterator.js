// ADD CODE HERE
const cycleIterator = (arr) => {
  let endCount = arr.length;
  let count = 0;

  return () => {
    if (count === endCount) {
      count = 0;
    }

    const item = arr[count];
    count++;
    return item;
  };
};

// Uncomment these to check your work!
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
