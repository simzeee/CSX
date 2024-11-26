function closestToTheMark(player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);
  console.log(player1, player2);
  // ADD CODE HERE
  let player1Result = Math.abs(theMark - player1);
  let player2Result = Math.abs(theMark - player2);

  if (player1Result > player2Result) {
    console.log("Player 2 is closest");
    return "Player 2 is closest";
  } else {
    console.log("Player 1 is closest");
    return "Player 1 is closest";
  }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));
