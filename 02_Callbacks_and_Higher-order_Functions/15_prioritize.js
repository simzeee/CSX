// ADD CODE HERE
const prioritize = (arr, callback) => {
  const result = [];
  const leftover = [];

  arr.forEach((ele, idx) => {
    if (callback(ele)) {
      result.push(ele);
    } else {
      leftover.push(ele);
    }
  });

  return result.concat(leftover);
};

// Uncomment these to check your work!
function startsWithS(str) {
  return str[0].toLowerCase() === "s";
}
const tvShows = ["curb", "rickandmorty", "seinfeld", "sunny", "friends"];
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// GPT

function prioritizeGPT(array, callback) {
  return [
    ...array.filter(callback), // Elements for which callback returns true
    ...array.filter((element) => !callback(element)), // Elements for which callback returns false
  ];
}
