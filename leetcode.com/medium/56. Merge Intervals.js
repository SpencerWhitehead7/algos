// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {
  if (!intervals.length) return []

  intervals.sort(([startTime1], [startTime2]) => startTime1 - startTime2)

  const mergedIntervals = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = mergedIntervals[mergedIntervals.length - 1]
    const currInterval = intervals[i]
    if (lastInterval[1] >= currInterval[0]) {
      mergedIntervals[mergedIntervals.length - 1] = [lastInterval[0], Math.max(lastInterval[1], currInterval[1])]
    } else {
      mergedIntervals.push(currInterval)
    }
  }

  return mergedIntervals
}

// no extra space for the result array, but is n^2 time because of the splices instead of nlogn time
// also mutates the input, but then, so does sorting it
const mergeInPlace = intervals => {
  if (!intervals.length) return []

  intervals.sort(([startTime1], [startTime2]) => startTime1 - startTime2)

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = intervals[i - 1]
    const currInterval = intervals[i]
    if (lastInterval[1] >= currInterval[0]) {
      intervals[i - 1] = [lastInterval[0], Math.max(lastInterval[1], currInterval[1])]
      intervals.splice(i, 1)
      i--
    }
  }

  return intervals
}

// alternate taking on merging in place; actually still uses same space as the non-inplace version because of the filter at the end, but it's the same idea
const mergeInPlace2 = intervals => {
  if (!intervals.length) return []

  intervals.sort(([startTime1], [startTime2]) => startTime1 - startTime2)

  let mergeBase = 0

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = intervals[mergeBase]
    const currInterval = intervals[i]
    if (lastInterval[1] >= currInterval[0]) {
      intervals[mergeBase] = [lastInterval[0], Math.max(lastInterval[1], currInterval[1])]
      intervals[i] = false
    } else {
      mergeBase = i
    }
  }

  return intervals.filter(Boolean)
}

// fascinatingly, leetcode/their JS compiler can optimize these such that the amount of space the extra array solution uses is slightly less than either of the inplace ones!! The non-splicing in place one is a tiny bit quicker than the other two, which finish in exactly the same amount of time so /shrug??? Anyway trying to optimize how your straight JS runs is a nightmare
