// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 15.

// [output] integer

function commonCharacterCount(s1, s2){
  let total = 0
  const sort1 = s1.split(``).sort()
  const sort2 = s2.split(``).sort()
  let p1 = 0
  let p2 = 0
  while(p1 < sort1.length && p2 < sort2.length){
    if(sort1[p1] === sort2[p2]){
      total++
      p1++
      p2++
    }
    if(sort1[p1] > sort2[p2]){
      p2++
    }else if(sort1[p1] < sort2[p2]){
      p1++
    }
  }
  return total
}