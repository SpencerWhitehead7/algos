// The input is a string that contains capital letters. If there are three or more same letters in a row, you need to compress them. You need to compress until there are there are no three or more letters are next to each other.

const stringCandyCrush = (str) => {
  const compressed = str.slice(0, 2).split(``)
  let i = 2
  let crushing = ``
  while (i < str.length) {
    if (!crushing) {
      if (
        str[i] === compressed[compressed.length - 1] &&
        str[i] === compressed[compressed.length - 2]
      ) {
        crushing = str[i]
        while (compressed[compressed.length - 1] === crushing) {
          compressed.pop()
        }
      } else {
        compressed.push(str[i])
      }
    } else if (str[i] !== crushing) {
      // creates problems if you have to simultaneously check to crush two different letters at once
      if (
        compressed[compressed.length - 1] === str[i] &&
        compressed[compressed.length - 2] === str[i]
      ) {
        while (compressed[compressed.length - 1] === str[i]) {
          compressed.pop()
        }
      } else {
        compressed.push(str[i])
      }
      crushing = ``
    }
    i++
  }
  return compressed.join(``)
}
