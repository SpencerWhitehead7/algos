// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

// Example 1:

// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
// Example 2:

// Input: moves = "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
// Example 3:

// Input: moves = "RRDD"
// Output: false
// Example 4:

// Input: moves = "LDRRLRUULR"
// Output: false

// Constraints:

// 1 <= moves.length <= 2 * 104
// moves only contains the characters 'U', 'D', 'L' and 'R'.

/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
  let x = 0
  let y = 0
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case `R`:
        x++
        break
      case `L`:
        x--
        break
      case `U`:
        y++
        break
      case `D`:
        y--
        break
    }
  }

  return x === 0 && y === 0
}

const judgeCircle2 = (moves) => {
  const moveCounts = {
    R: 0,
    L: 0,
    U: 0,
    D: 0,
  }

  for (let i = 0; i < moves.length; i++) {
    moveCounts[moves[i]]++
  }

  return moveCounts.R === moveCounts.L && moveCounts.U === moveCounts.D
}

const judgeCircle3 = (moves) => {
  const moveCounts = moves.split(``).reduce(
    (counts, move) => {
      counts[move]++
      return counts
    },
    {
      R: 0,
      L: 0,
      U: 0,
      D: 0,
    }
  )

  return moveCounts.R === moveCounts.L && moveCounts.U === moveCounts.D
}
