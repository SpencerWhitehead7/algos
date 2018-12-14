// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

const findOutlier = integers => {
  // your code here
  let counter = 0
  for(let i = 0; i < 3; i++){
    integers[i] % 2 === 0 ? counter++ : counter--
  }
  const lookingForEven = counter < 0
  for(let i = 0; i < integers.length; i++){
    if(lookingForEven && integers[i] % 2 === 0){
      return integers[i]
    }else if(!lookingForEven && integers[i] % 2 !== 0){
      return integers[i]
    }
  }
}

// dank 1 liner solution from codewars

const findOutlierAlt = integers => integers.slice(0, 3).filter(num => num % 2 === 0).length >= 2 ? integers.find(num => num % 2 === 0) : integers.find(num => num % 2 !== 0)
