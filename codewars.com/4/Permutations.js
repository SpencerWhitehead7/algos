// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

const helper = str => {
  if (str.length === 1) return [str]
  const all = []
  let i = 0
  while (i < str.length) {
    const letter = str[i]
    const otherChars = str.slice(0, i) + str.slice(i + 1)
    helper(otherChars).forEach(subpermut => {
      all.push(letter + subpermut)
    })
    while (str[i] === letter) { i++ }
  }
  return all
}

const permutations = string => helper(string.split(``).sort().join(``))
