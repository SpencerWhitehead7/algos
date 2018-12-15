// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

// Example

// For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
// sumOfTwo(a, b, v) = true.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// An array of integers.

// Guaranteed constraints:
// 0 ≤ a.length ≤ 105,
// -109 ≤ a[i] ≤ 109.

// [input] array.integer b

// An array of integers.

// Guaranteed constraints:
// 0 ≤ b.length ≤ 105,
// -109 ≤ b[i] ≤ 109.

// [input] integer v

// Guaranteed constraints:
// -109 ≤ v ≤ 109.

// [output] boolean

// true if there are two elements from a and b which add up to v, and false otherwise.

const sumOfTwo = (a, b, v) => {
  const larger = a.length > b.length ? a : b
  const smaller = a.length > b.length ? b : a
  const tracker = {}
  smaller.forEach(num => {
    tracker[num] = 1
  })
  for(let i = 0; i < larger.length; i++){
    if(tracker[v - larger[i]]) return true
  }
  return false
}

const sumOfTwoSillyVer = (a, b, v) => {
  const mixedArr = []
  for(let i = 0; i < a.length; i++){
    mixedArr.push({num : a[i], arr : `a`})
  }
  for(let i = 0; i < b.length; i++){
    mixedArr.push({num : b[i], arr : `b`})
  }
  mixedArr.sort((v1, v2) => v1.num - v2.num)
  let pointer1 = 0
  let pointer2 = mixedArr.length - 1
  while(pointer1 < pointer2){
    if(mixedArr[pointer1].num + mixedArr[pointer2].num === v && mixedArr[pointer1].arr !== mixedArr[pointer2].arr){
      return true
    }else if(mixedArr[pointer1].num + mixedArr[pointer2].num < v){
      pointer1++
    }else if(mixedArr[pointer1].num + mixedArr[pointer2].num > v){
      pointer2--
    }else if(mixedArr[pointer1].num === mixedArr[pointer1 + 1].num){
      pointer1++
    }else if(mixedArr[pointer2].num === mixedArr[pointer2 - 1].num){
      pointer2--
    }else{
      pointer1++
      pointer2--
    }
  }
  return false
}
