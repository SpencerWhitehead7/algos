// Given a blacklist B containing unique integers from [0, N), write a function to return a uniform random integer from [0, N) which is NOT in B.

//   Optimize it such that it minimizes the call to system’s Math.random().

//   Note:

//   1 <= N <= 1000000000
//   0 <= B.length < min(100000, N)
//   [0, N) does NOT include N. See interval notation.
//   Example 1:

//   Input:
//   ["Solution","pick","pick","pick"]
//   [[1,[]],[],[],[]]
//   Output: [null,0,0,0]
//   Example 2:

//   Input:
//   ["Solution","pick","pick","pick"]
//   [[2,[]],[],[],[]]
//   Output: [null,1,1,1]
//   Example 3:

//   Input:
//   ["Solution","pick","pick","pick"]
//   [[3,[1]],[],[],[]]
//   Output: [null,0,0,2]
//   Example 4:

//   Input:
//   ["Solution","pick","pick","pick"]
//   [[4,[2]],[],[],[]]
//   Output: [null,1,3,1]
//   Explanation of Input Syntax:

//   The input is two lists: the subroutines called and their arguments. Solution's constructor has two arguments, N and the blacklist B. pick has no arguments. Arguments are always wrapped with a list, even if there aren't any.

/**
 * @param {number} N
 * @param {number[]} blacklist
 */
const Solution = function(N, blacklist){
  const possibleNumbers = []
  const blacklistSet = new Set(blacklist)
  if(N < 1000000000){
    for(let i = 0; i < N; i++){
      if(!blacklistSet.has(i)){
        possibleNumbers.push(i)
      }
    }
  }
  this.N = N
  this.possibleNumbers = possibleNumbers
  this.blacklistSet = blacklistSet
  this.useWhitelist = N < 1000000000
}

/**
 * @return {number}
 */
Solution.prototype.pick = function(){
  if(this.useWhitelist){
    return this.possibleNumbers[Math.floor(Math.random() * this.possibleNumbers.length)]
  }else{
    // eslint-disable-next-line no-constant-condition
    while(true){
      const possibleRes = Math.floor(Math.random() * this.N)
      if(!this.blacklistSet.has(possibleRes)){
        return possibleRes
      }
    }
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(N, blacklist)
 * var param_1 = obj.pick()
 */
