// ADD CODE HERE
const goodKeys = (obj, callback) => {
  return Object.keys(obj).filter((ele) => callback(obj[ele]) === true);
};

// Uncomment these to check your work!
const sunny = {
  mac: "priest",
  dennis: "calculator",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === "bird";
}
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
