const expect = require(`chai`).expect

const {snailRec, snailIter} = require(`./snail`)

describe(`snailRec`, () => {
  it(`can handle an empty input`, () => {
    expect(snailRec([[]])).to.deep.equal([])
  })
  it(`can handle any type of square array`, () => {
    expect(snailRec([[1]])).to.deep.equal([1])
    expect(snailRec([[1,2], [3,4]])).to.deep.equal([1,2,4,3])
    expect(snailRec([[1,2,3], [4,5,6], [7,8,9]])).to.deep.equal([1,2,3,6,9,8,7,4,5])
    expect(snailRec([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]])).to.deep.equal([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10])
  })
  it(`can handle horizontal rectangles`, () => {
    expect(snailRec([[1,2]])).to.deep.equal([1,2])
    expect(snailRec([[1,2,3], [4,5,6]])).to.deep.equal([1,2,3,6,5,4])
    expect(snailRec([[1,2,3,4], [5,6,7,8], [9,10,11,12]])).to.deep.equal([1,2,3,4,8,12,11,10,9,5,6,7])
  })
  it(`can handle vertical rectangles`, () => {
    expect(snailRec([[1], [2]])).to.deep.equal([1,2])
    expect(snailRec([[1,2], [3,4], [5,6]])).to.deep.equal([1,2,4,6,5,3])
    expect(snailRec([[1,2,3], [4,5,6], [7,8,9], [10,11,12]])).to.deep.equal([1,2,3,6,9,12,11,10,7,4,5,8])
  })
})

describe(`snailIter`, () => {
  it(`can handle an empty input`, () => {
    expect(snailIter([[]])).to.deep.equal([])
  })
  it(`can handle any type of square array`, () => {
    expect(snailIter([[1]])).to.deep.equal([1])
    expect(snailIter([[1,2], [3,4]])).to.deep.equal([1,2,4,3])
    expect(snailIter([[1,2,3], [4,5,6], [7,8,9]])).to.deep.equal([1,2,3,6,9,8,7,4,5])
    expect(snailIter([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]])).to.deep.equal([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10])
  })
  it(`can handle horizontal rectangles`, () => {
    expect(snailIter([[1,2]])).to.deep.equal([1,2])
    expect(snailIter([[1,2,3], [4,5,6]])).to.deep.equal([1,2,3,6,5,4])
    expect(snailIter([[1,2,3,4], [5,6,7,8], [9,10,11,12]])).to.deep.equal([1,2,3,4,8,12,11,10,9,5,6,7])
  })
  it(`can handle vertical rectangles`, () => {
    expect(snailIter([[1], [2]])).to.deep.equal([1,2])
    expect(snailIter([[1,2], [3,4], [5,6]])).to.deep.equal([1,2,4,6,5,3])
    expect(snailIter([[1,2,3], [4,5,6], [7,8,9], [10,11,12]])).to.deep.equal([1,2,3,6,9,12,11,10,7,4,5,8])
  })
})
