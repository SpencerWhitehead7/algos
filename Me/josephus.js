// In computer science and mathematics, the Josephus problem (or Josephus permutation) is a theoretical problem related to a certain counting-out game.

// People are standing in a circle waiting to be executed. Counting begins at a specified point in the circle and proceeds around the circle in a specified direction. After a specified number of people are skipped, the next person is executed. The procedure is repeated with the remaining people, starting with the next person, going in the same direction and skipping the same number of people, until only one person remains, and is freed.

// The problem — given the number of people, starting point, direction, and number to be skipped — is to choose the position in the initial circle to avoid execution.

const josephus = (numPlayers, skipped) => {
  const positions = new Array(numPlayers).fill(1).map((ele, i) => ele+i)
  let i = 0
  while(positions.length>1){
    i = (i + skipped)%positions.length
    positions.splice(i-1, 1)
  }
  return positions[0]
}

console.log(josephus(14, 2))
