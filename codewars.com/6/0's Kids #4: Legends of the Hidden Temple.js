// You've made it through the moat and up the steps of knowledge. You've won the temples games and now you're hunting for treasure in the final temple run. There's good news and bad news. You've found the treasure but you've triggered a nasty trap. You'll surely perish in the temple chamber.

// With your last movements, you've decided to draw an "X" marks the spot for the next archeologist.

// Given an odd number, n, draw an X for the next crew. Follow the example below.

// markSpot(5) ->

// X       X
//   X   X
//     X
//   X   X
// X       X

// For a clearer understanding of the output, let '.' represent a space and \n the newline.
// X.......X\n
// ..X...X\n
// ....X\n
// ..X...X\n
// X.......X\n

// markSpot(3) ->

// X   X
//   X
// X   X
// markSpot(5) #

// X       X
//   X   X
//     X
//   X   X
// X       X

// For a clearer understanding of the output, let '.' represent a space and \n the newline.
// X.......X\n
// ..X...X\n
// ....X\n
// ..X...X\n
// X.......X\n

// markSpot(3) #

// X   X
//   X
// X   X
// If n = 1 return 'X\n' and if you're given an even number or invalid input, return '?'.

// The output should be a string with no spaces after the final X on each line, but a \n to indicate a new line.

// NOTE: this problem's bullshit arithmetic almost killed me and took longer than several real algos put together would have

const markSpot = n => {
  if(n <= 0 || n % 2 === 0 || typeof n !== `number`) return `?`
  const generatePad = n => new Array(n + 1).join(` `)
  const halfway = Math.floor(n / 2)
  const res = []
  for(let i = 0; i < halfway; i++){
    const left = generatePad(i * 2)
    const middle = generatePad(4 * (halfway - i) - 1)
    const line = `${left}X${middle}X\n`
    res.push(line)
  }
  res.push(`${generatePad(halfway * 2)}X\n`)
  for(let i = halfway - 1; i >= 0; i--){
    res.push(res[i])
  }
  return res.join(``)
}
