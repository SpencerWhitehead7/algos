// Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

// Note:

// 1 <= w.length <= 10000
// 1 <= w[i] <= 10^5
// pickIndex will be called at most 10000 times.
// Example 1:

// Input:
// ["Solution","pickIndex"]
// [[[1]],[]]
// Output: [null,0]
// Example 2:

// Input:
// ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
// [[[1,3]],[],[],[],[],[]]
// Output: [null,0,1,1,1,0]
// Explanation of Input Syntax:

// The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.

/**
 * @param {number[]} w
 */
const Solution = function(w){
  const total = w.reduce((acc, curr) => acc + curr)
  let bottom = 0
  let top = 0
  const weights = w.map(wNum => {
    top += wNum
    const res = [bottom, top]
    bottom = top
    return res
  })
  this.weights = weights
  this.total = total
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function(){
  const pick = Math.random() * this.total
  for(let i = 0; i < this.weights.length; i++){
    if(pick >= this.weights[i][0] && pick < this.weights[i][1]) return i
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(w)
 * var param_1 = obj.pickIndex()
 */
