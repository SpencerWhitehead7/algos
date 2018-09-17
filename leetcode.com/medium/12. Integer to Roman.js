// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: 3
// Output: "III"
// Example 2:

// Input: 4
// Output: "IV"
// Example 3:

// Input: 9
// Output: "IX"
// Example 4:

// Input: 58
// Output: "LVIII"
// Explanation: C = 100, L = 50, XXX = 30 and III = 3.
// Example 5:

// Input: 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {number} num
 * @return {string}
 */

const digitToRoman = (place, digit) => {
  let add = ``
  let sub1 = ``
  let sub2 = ``
  if(place === 0){
    add = `I`
    sub1 = `V`
    sub2 = `X`
  }else if(place === 1){
    add = `X`
    sub1 = `L`
    sub2 = `C`
  }else if(place === 2){
    add = `C`
    sub1 = `D`
    sub2 = `M`
  }else if(place === 3){
    add = `M`
  }
  switch(digit){
    case `1`:
      return add
    case `2`:
      return add + add
    case `3`:
      return add + add + add
    case `4`:
      return add + sub1
    case `5`:
      return sub1
    case `6`:
      return sub1 + add
    case `7`:
      return sub1 + add + add
    case `8`:
      return sub1 + add + add + add
    case `9`:
      return add + sub2
    case `0`:
      return ``
    default:
      return ``
  }
}

const intToRoman = function(num){
  const digits = num.toString().split(``).reverse()
  let res = ``
  digits.forEach((digit, i) => {res = digitToRoman(i, digit) + res})
  return res
}
