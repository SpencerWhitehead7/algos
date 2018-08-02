// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(inputString){
  const tracker = {}
  let odds = 0
  for(let i=0; i<inputString.length; i++){
    if(tracker[inputString[i]]){
      tracker[inputString[i]]++
    }else{
      tracker[inputString[i]] = 1
    }
  }
  Object.keys(tracker).forEach(char => {
    if(tracker[char]%2 === 1) odds++
  })
  return !(odds > 1)
} 
