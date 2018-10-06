// Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.

// All rearrangements don't satisfy the description condition.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// Strings can be rearranged in the following way: "aa", "ab", "bb".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 15.

// [output] boolean

const stringsRearrangement = inputArray => {
  const counter = generateCounter(inputArray)
  const queue = inputArray.map(ele => [ele])
  while(queue.length){
    const base = queue.shift()
    if(base.length === inputArray.length) return true
    inputArray.forEach(possibleNextStr => {
      if(countOccurances(possibleNextStr, base) < counter[possibleNextStr] && differsByOne(possibleNextStr, base[base.length - 1])){
        queue.push([...base, possibleNextStr])
      }
    })
  }
  return false
}

const generateCounter = arr => {
  const counter = {}
  arr.forEach(ele => {
    if(counter[ele]){
      counter[ele]++
    }else{
      counter[ele] = 1
    }
  })
  return counter
}

const countOccurances = (str, arr) => {
  let occurances = 0
  arr.forEach(ele => {
    if(ele === str) occurances++
  })
  return occurances
}

const differsByOne = (s1, s2) => {
  let differsBy = 0
  for(let i = 0; i < s1.length; i++){
    if(s1[i] !== s2[i]) differsBy++
  }
  return differsBy === 1
}
