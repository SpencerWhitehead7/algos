// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort(([startTime1], [startTime2]) => startTime1 - startTime2)

  const res = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i]
    const [, prevEnd] = res[res.length - 1]
    if (currStart <= prevEnd) {
      res[res.length - 1][1] = Math.max(prevEnd, currEnd)
    } else {
      res.push(intervals[i])
    }
  }

  return res
}

// I usually favor the built in functions, immutability, and one-liners, but
// tbh this is way more confusing than the for loop version
const mergeReduce = (intervals) =>
  intervals
    .sort(([startTime1], [startTime2]) => startTime1 - startTime2)
    .reduce(
      (acc, curr) => {
        const [currStart, currEnd] = curr
        const prev = acc.pop()
        const [prevStart, prevEnd] = prev
        if (currStart <= prevEnd) {
          acc.push([prevStart, Math.max(prevEnd, currEnd)])
        } else {
          acc.push(prev)
          acc.push(curr)
        }
        return acc
      },
      [intervals[0]]
    )

// no extra space for the result array, but is n^2 time because of the splices instead of nlogn time
// also mutates the input, but then, so does sorting it
const mergeInPlace = (intervals) => {
  intervals.sort(([startTime1], [startTime2]) => startTime1 - startTime2)

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = intervals[i - 1]
    const currInterval = intervals[i]
    if (lastInterval[1] >= currInterval[0]) {
      intervals[i - 1] = [
        lastInterval[0],
        Math.max(lastInterval[1], currInterval[1]),
      ]
      intervals.splice(i, 1)
      i--
    }
  }

  return intervals
}

// alternate taking on merging in place; actually still uses same space as the non-inplace version because of the filter at the end, but it's the same idea
const mergeInPlace2 = (intervals) => {
  intervals.sort(([startTime1], [startTime2]) => startTime1 - startTime2)

  let mergeBase = 0

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = intervals[mergeBase]
    const currInterval = intervals[i]
    if (lastInterval[1] >= currInterval[0]) {
      intervals[mergeBase] = [
        lastInterval[0],
        Math.max(lastInterval[1], currInterval[1]),
      ]
      intervals[i] = false
    } else {
      mergeBase = i
    }
  }

  return intervals.filter(Boolean)
}

// fascinatingly, leetcode/their JS compiler can optimize these such that the amount of space the extra array solution uses is slightly less than either of the inplace ones!! The non-splicing in place one is a tiny bit quicker than the other two, which finish in exactly the same amount of time so /shrug??? Anyway trying to optimize how your straight JS runs is a nightmare
