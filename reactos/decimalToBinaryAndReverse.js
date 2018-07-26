// Decimal-To-Binary & reverse
// Prompt
// Write 2 functions, one that takes the a number in base 10 (decimal) and converts it to the string representation of that number in base 2 (binary), and one that converts back.

// You may not use parseInt, toString, or any similar function which does base conversion for you.

// Examples
decimalToBinary(4) // should return '100'
decimalToBinary(67) // should return '1000011'

binaryToDecimal(`100`) // should return 4
binaryToDecimal(`1000011`) // should return 67

const binaryToDecimal = num => {
  const digits = num.toString().split(``).reverse()
  let total = 0
  for(let i=0; i<digits.length; i++){
    total += digits[i]*Math.pow(2, i)
  }
  return total
}

const decimalToBinary = num => {
  let out = ``
  while(num>0){
    out = num%2 + out  // still don't understand WHY this works
    num = Math.floor(num/2)
  }
  return out
}