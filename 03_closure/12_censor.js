// ADD CODE HERE
const censor = () => {
  const stringTracker = {};

  return (...strings) => {
    if (strings.length === 2) {
      stringTracker[strings[0]] = strings[1];
    } else {
      let stringSplit = strings[0].split(" ");
      stringSplit.forEach((word, idx) => {
        if (word.endsWith(",")) {
          let newWord = word.slice(0, -1);
          if (stringTracker[newWord]) {
            newWord = stringTracker[newWord] + ",";
            stringSplit[idx] = newWord;
          }
        }

        if (word.endsWith(".")) {
          let newWord = word.slice(0, -1);
          if (stringTracker[newWord]) {
            newWord = stringTracker[newWord] + ".";
            stringSplit[idx] = newWord;
          }
        }

        if (stringTracker[word]) {
          stringSplit[idx] = stringTracker[word];
        }
      });
      return stringSplit.join(" ");
    }
  };
};

// Uncomment these to check your work!
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
