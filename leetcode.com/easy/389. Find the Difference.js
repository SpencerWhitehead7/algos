// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

// Example:

// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const tracker = {}
  s.split(``).forEach(letter => {
    if(tracker[letter]){
      tracker[letter]++
    }else{
      tracker[letter] = 1
    }
  })
  for(let i = 0; i < t.length; i++){
    if(tracker[t[i]]){
      tracker[t[i]]--
    }else{
      return t[i]
    }
  }
}
