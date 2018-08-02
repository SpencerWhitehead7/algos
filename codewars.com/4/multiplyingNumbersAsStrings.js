// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

function multiply(a, b){
  const mults = bigIntMult(a, b)
  while(mults.length > 1){
    mults.push(bigIntAdd(mults.pop(), mults.pop()))
  }
  return removeLeadingZeros(mults[0]).join(``)
}

function bigIntMult(a, b){
  const num1 = a.split(``)
  const num2 = b.split(``)
  const mults = []
  const place = []
  for(let n1D=num1.length-1; n1D>=0; n1D--){
    const mult = [...place]
    let carry = 0
    for(let n2D=num2.length-1; n2D>=0; n2D--){
      const res = (Number(num1[n1D]) * Number(num2[n2D]) + carry).toString()
      const newD = res.slice(-1)
      carry = res.slice(0, -1).length ? Number(res.slice(0, -1)) : 0
      mult.push(newD)
      if(n2D === 0 && carry !== 0){
        mult.push(carry.toString())
      }
    }
    mults.push(mult.reverse())
    place.push(`0`)
  }
  return mults
}

function bigIntAdd(arr1, arr2){
  const long = arr1.length >= arr2.length ? arr1 : arr2
  const short = arr1.length < arr2.length ? arr1 : arr2
  const sum = []
  let carry = 0
  for(let i=1; i<=long.length; i++){
    const res = short[short.length - i] !== undefined
      ? (Number(long[long.length - i]) + Number(short[short.length - i]) + carry).toString()
      : (Number(long[long.length - i]) + carry).toString()
    const newD = res.slice(-1)
    carry = res.slice(0,-1).length ? Number(res.slice(0,-1)) : 0
    sum.push(newD)
    if(i === long.length && carry !== 0){
      sum.push(carry.toString())
    }
  }
  return sum.reverse()
}

function removeLeadingZeros(arr){
  let i = 0
  while(arr[i]===`0` && i !== arr.length - 1){
    i++
  }
  return arr.slice(i)
}
