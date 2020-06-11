// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const search = nums1.length < nums2.length ? nums1 : nums2
  const alt = search === nums1 ? nums2 : nums1

  const leftHalfLength = Math.ceil((nums1.length + nums2.length) / 2)

  let searchMinContrib = 0
  let searchMaxContrib = search.length

  while (searchMinContrib <= searchMaxContrib) {
    const searchContrib = Math.floor(searchMinContrib + ((searchMaxContrib - searchMinContrib) / 2)) // === Math.floor(min + max) / 2) to prevent integer overflows do the algebra
    const lastLeftSearchVal = search[searchContrib - 1]
    const firstRightSearchVal = search[searchContrib]

    const altContrib = leftHalfLength - searchContrib
    const lastLeftAltVal = alt[altContrib - 1]
    const firstRightAltVal = alt[altContrib]

    // this can potentially check an out of bounds index, but in JS that will give you undefined, which is always false when compared to a number with > or <, giving you the same effect as short circuiting out if the index is out of bounds
    if (lastLeftSearchVal > firstRightAltVal) {
      searchMaxContrib = searchContrib - 1
      // this can also potentially check an out of bounds index, but in JS that will give you undefined, which is always false when compared to a number with > or <, giving you the same effect as short circuiting out if the index is out of bounds
    } else if (firstRightSearchVal < lastLeftAltVal) {
      searchMinContrib = searchContrib + 1
    } else {
      const leftHalfEnd = searchContrib === 0
        ? lastLeftAltVal
        : altContrib === 0
          ? lastLeftSearchVal
          : Math.max(lastLeftSearchVal, lastLeftAltVal)
      if ((search.length + alt.length) % 2 === 1) {
        return leftHalfEnd
      } else {
        const rightHalfStart = searchContrib === search.length
          ? firstRightAltVal
          : altContrib === alt.length
            ? firstRightSearchVal
            : Math.min(firstRightSearchVal, firstRightAltVal)

        return (leftHalfEnd + rightHalfStart) / 2
      }
    }
  }
}

const findMedianSortedArraysLinear = (nums1, nums2) => {
  const middleI = Math.ceil((nums1.length + nums2.length) / 2) - 1
  let nums1Write = 0
  let nums2Write = 0
  while (nums1Write + nums2Write <= middleI) {
    if (nums1Write < nums1.length && nums1[nums1Write] <= nums2[nums2Write]) {
      nums1Write++
    } else if (nums2Write < nums2.length) {
      nums2Write++
    } else {
      nums1Write++
    }
  }

  const leftHalfEnd = nums1Write === 0
    ? nums2[nums2Write - 1]
    : nums2Write === 0
      ? nums1[nums1Write - 1]
      : Math.max(nums1[nums1Write - 1], nums2[nums2Write - 1])

  if ((nums1.length + nums2.length) % 2 === 1) {
    return leftHalfEnd
  }

  const rightHalfStart = nums1Write === nums1.length
    ? nums2[nums2Write]
    : nums2Write === nums2.length
      ? nums1[nums1Write]
      : Math.min(nums1[nums1Write], nums2[nums2Write])

  return (leftHalfEnd + rightHalfStart) / 2
}

// a less optimized linear version would merge the two lists smartly, actually zipping them, instead
// of dumbly merging and then calling .sort, then do the simple middle index / middle index + 1 selection

const findMedianSortedArraysNlogN = (nums1, nums2) => {
  const zipped = [...nums1, ...nums2].sort()
  const middleI = Math.ceil(zipped.length / 2) - 1
  if (zipped.length % 2 === 1) {
    return zipped[middleI]
  } else {
    return (zipped[middleI - 1] + zipped[middleI]) / 2
  }
}
