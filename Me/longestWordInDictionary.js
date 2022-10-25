// I'm unsure what this prompt actually was, but I think it was something like this https://stackoverflow.com/questions/52382844/given-a-word-find-the-longest-words-in-a-dictionary-that-can-be-formed-using

// O(n!)
const findLongestViaPermutation = (dict, chars) => { // assumes a set for dict
  const permute = (remainingLetters, baseLetters) => {
    const permutations = [baseLetters]
    if (!remainingLetters.length) return permutations

    for (let i = 0; i < remainingLetters.length; i++) {
      const letter = remainingLetters[i]
      const otherLetters = remainingLetters.slice(0, i) + remainingLetters.slice(i + 1)
      permutations.push(...permute(otherLetters, `${baseLetters}${letter}`))
    }

    return permutations
  }

  const permutations = permute(chars, ``)

  let longestWord = ``

  for (let i = 0; i < permutations.length; i++) {
    const word = permutations[i]
    if (dict.has(word) && word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

// O(n)
const findLongest = (dict, chars) => { // assumes an array for dict
  const getFreqMap = str => str
    .split(``)
    .reduce((acc, char) => {
      acc[char] ??= 0
      acc[char]++
      return acc
    }, {})

  const charMap = getFreqMap(chars)

  const possibleWords = dict.filter(word => Object.entries(getFreqMap(word)).every(([k, v]) => v <= charMap[k]))

  let longestWord = ``

  for (let i = 0; i < possibleWords.length; i++) {
    const word = possibleWords[i]
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

console.log(findLongestViaPermutation(new Set([`to`, `toe`, `toes`, `dog`]), `ote`))
console.log(findLongest([`to`, `toe`, `toes`, `dog`], `ote`))
