// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
// 1 ≤ picture[i].length ≤ 100.

// [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

function addBorder(picture){
  const framed = []
  picture.forEach(row => {
    framed.push(`*${row}*`)
  })
  let topAndBottomEdge = ``
  for(let i=0; i<framed[0].length; i++){
    topAndBottomEdge += `*`
  }
  framed.unshift(topAndBottomEdge)
  framed.push(topAndBottomEdge)
  return framed
}
