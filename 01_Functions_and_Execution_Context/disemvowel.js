function disemvowel(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) {
      result += string[i];
    }
  }
  return result;
}
