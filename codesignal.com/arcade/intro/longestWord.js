// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string text

// Guaranteed constraints:
// 4 ≤ text.length ≤ 50.

// [output] string

// The longest word from text. It's guaranteed that there is a unique output.

const longestWord = text => {
  const wordyChunks = text.replace(/[^a-z]/gi, ` `).replace(/\s\s+/g, ` `).split(` `)
  console.log(wordyChunks)
  let longest = wordyChunks[0]
  wordyChunks.forEach(wordyChunk => {
    if(wordyChunk.length > longest.length) longest = wordyChunk
  })
  return longest
}
