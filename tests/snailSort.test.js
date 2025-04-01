const assert = require("node:assert/strict")
const { describe, it } = require("node:test")

const { snailRec, snailIter } = require(`../codewars.com/4/snail`)
const {
  spiralOrderMut,
  spiralOrder,
} = require(`../leetcode.com/medium/54. Spiral Matrix`)

// prettier-ignore
const testCases = {
  empty: [
    [
      [[]],
      [],
    ],
  ],
  square: [
    [
      [[1]],
      [1],
    ],
    [
      [[1, 2], [3, 4]],
      [1, 2, 4, 3],
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ], [1, 2, 3, 6, 9, 8, 7, 4, 5],
    ],
    [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
    ],
  ],
  stripe: [
    [
      [[1, 2, 3, 4, 5]],
      [1, 2, 3, 4, 5],
    ],
    [
      [[1], [2], [3], [4], [5]],
      [1, 2, 3, 4, 5],
    ],
  ],
  horizontalRectangle: [
    [
      [[1, 2]],
      [1, 2],
      ],
    [
      [[1, 2, 3], [4, 5, 6]],
      [1, 2, 3, 6, 5, 4],
    ],
    [
      [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
      [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    ],
  ],
  verticalRectangle: [
    [
      [[1], [2]],
      [1, 2],
    ],
    [
      [[1, 2], [3, 4], [5, 6]],
      [1, 2, 4, 6, 5, 3],
    ],
    [
      [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]],
      [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8],
    ],
  ],
}

describe(`snail sort implementations`, () => {
  ;[snailRec, snailIter, spiralOrderMut, spiralOrder].forEach((impl) => {
    describe(impl.name, () => {
      it(`${impl.name} handles empty rectangles`, () => {
        testCases.empty.forEach(([input, output]) => {
          assert.deepStrictEqual(impl(structuredClone(input)), output)
        })
      })

      it(`${impl.name} handles square rectangles`, () => {
        testCases.square.forEach(([input, output]) => {
          assert.deepStrictEqual(impl(structuredClone(input)), output)
        })
      })

      it(`${impl.name} handles stripe rectangles`, () => {
        testCases.stripe.forEach(([input, output]) => {
          assert.deepStrictEqual(impl(structuredClone(input)), output)
        })
      })

      it(`${impl.name} handles horizontal rectangles`, () => {
        testCases.horizontalRectangle.forEach(([input, output]) => {
          assert.deepStrictEqual(impl(structuredClone(input)), output)
        })
      })

      it(`${impl.name} handles vertical rectangles`, () => {
        testCases.verticalRectangle.forEach(([input, output]) => {
          assert.deepStrictEqual(impl(structuredClone(input)), output)
        })
      })
    })
  })
})
