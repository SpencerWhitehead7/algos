const expect = require(`chai`).expect
const _cloneDeep = require(`lodash/cloneDeep`)

const { snailRec, snailIter } = require(`../codewars.com/4/snail`)
const { spiralOrderMut, spiralOrder } = require(`../leetcode.com/medium/54. Spiral Matrix`)

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
  describe(`snailRec`, () => {
    const cases = _cloneDeep(testCases)
    it(`can handle an empty input`, () => {
      cases.empty.forEach(([input, output]) => {
        expect(snailRec(input)).to.deep.equal(output)
      })
    })
    it(`can handle any type of square array`, () => {
      cases.square.forEach(([input, output]) => {
        expect(snailRec(input)).to.deep.equal(output)
      })
    })
    it(`can handle any type of stripe array`, () => {
      cases.stripe.forEach(([input, output]) => {
        expect(snailRec(input)).to.deep.equal(output)
      })
    })
    it(`can handle horizontal rectangles`, () => {
      cases.horizontalRectangle.forEach(([input, output]) => {
        expect(snailRec(input)).to.deep.equal(output)
      })
    })
    it(`can handle vertical rectangles`, () => {
      cases.verticalRectangle.forEach(([input, output]) => {
        expect(snailRec(input)).to.deep.equal(output)
      })
    })
  })

  describe(`snailIter`, () => {
    const cases = _cloneDeep(testCases)
    it(`can handle an empty input`, () => {
      cases.empty.forEach(([input, output]) => {
        expect(snailIter(input)).to.deep.equal(output)
      })
    })
    it(`can handle any type of square array`, () => {
      cases.square.forEach(([input, output]) => {
        expect(snailIter(input)).to.deep.equal(output)
      })
    })
    it(`can handle any type of stripe array`, () => {
      cases.stripe.forEach(([input, output]) => {
        expect(snailIter(input)).to.deep.equal(output)
      })
    })
    it(`can handle horizontal rectangles`, () => {
      cases.horizontalRectangle.forEach(([input, output]) => {
        expect(snailIter(input)).to.deep.equal(output)
      })
    })
    it(`can handle vertical rectangles`, () => {
      cases.verticalRectangle.forEach(([input, output]) => {
        expect(snailIter(input)).to.deep.equal(output)
      })
    })
  })

  describe(`spiralOrderMut`, () => {
    const cases = _cloneDeep(testCases)
    it(`can handle an empty input`, () => {
      cases.empty.forEach(([input, output]) => {
        expect(spiralOrderMut(input)).to.deep.equal(output)
      })
    })
    it(`can handle any type of square array`, () => {
      cases.square.forEach(([input, output]) => {
        expect(spiralOrderMut(input)).to.deep.equal(output)
      })
    })
    it(`can handle any type of stripe array`, () => {
      cases.stripe.forEach(([input, output]) => {
        expect(spiralOrderMut(input)).to.deep.equal(output)
      })
    })
    it(`can handle horizontal rectangles`, () => {
      cases.horizontalRectangle.forEach(([input, output]) => {
        expect(spiralOrderMut(input)).to.deep.equal(output)
      })
    })
    it(`can handle vertical rectangles`, () => {
      cases.verticalRectangle.forEach(([input, output]) => {
        expect(spiralOrderMut(input)).to.deep.equal(output)
      })
    })
  })

  describe(`spiralOrder`, () => {
    const cases = _cloneDeep(testCases)
    it(`can handle an empty input`, () => {
      cases.empty.forEach(([input, output]) => {
        expect(spiralOrder(input)).to.deep.equal(output)
      })
    })
    it(`can handle any type of square array`, () => {
      cases.square.forEach(([input, output]) => {
        expect(spiralOrder(input)).to.deep.equal(output)
      })
    })
    it(`can handle any type of stripe array`, () => {
      cases.stripe.forEach(([input, output]) => {
        expect(spiralOrder(input)).to.deep.equal(output)
      })
    })
    it(`can handle horizontal rectangles`, () => {
      cases.horizontalRectangle.forEach(([input, output]) => {
        expect(spiralOrder(input)).to.deep.equal(output)
      })
    })
    it(`can handle vertical rectangles`, () => {
      cases.verticalRectangle.forEach(([input, output]) => {
        expect(spiralOrder(input)).to.deep.equal(output)
      })
    })
  })
})
