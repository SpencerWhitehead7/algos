// Award Budget Cuts
// The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

// Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

// Analyze the time and space complexities of your solution.

// Example:

// input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

// output: 47 # and given this cap the new grants array would be
//            # [2, 47, 47, 47, 47]. Notice that the sum of the
//            # new grants is indeed 190
// Constraints:

// [time limit] 5000ms

// [input] array.double grantsArray

// 0 ≤ grantsArray.length ≤ 20
// 0 ≤ grantsArray[i]
// [input] double newBudget

// [output] double

// Mine

const myFindGrantsCap = (grantsArray, newBudget) => {
  let cap = 0
  let total = grantsArray
    .map((ele) => (ele > cap ? cap : ele))
    .reduce((acc, curr) => acc + curr)
  while (total < newBudget) {
    cap++
    total = grantsArray
      .map((ele) => (ele > cap ? cap : ele))
      .reduce((acc, curr) => acc + curr)
  }
  cap--
  total = grantsArray
    .map((ele) => (ele > cap ? cap : ele))
    .reduce((acc, curr) => acc + curr)
  cap += (newBudget - total) / grantsArray.filter((ele) => ele > cap).length
  return cap
}

// Theirs

const findGrantsCap = (grantsArray, newBudget) => {
  grantsArray.sort((a, b) => b - a)
  grantsArray.push(0)
  let surplus = grantsArray.reduce((acc, curr) => acc + curr) - newBudget
  if (surplus <= 0) return grantsArray[0]
  let derivedI = 0
  for (let i = 0; i < grantsArray.length; i++) {
    surplus -= (i + 1) * (grantsArray[i] - grantsArray[i + 1])
    if (surplus <= 0) {
      derivedI = i
      break
    }
  }
  return grantsArray[derivedI + 1] + -surplus / (derivedI + 1)
}
