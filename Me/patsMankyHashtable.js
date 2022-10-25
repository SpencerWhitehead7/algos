// get: key => value
// insert: (key, value) => value | null
// delete: key => null | value

const values = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  // ...
  t: 22,
  s: 23,
  x: 24,
  y: 25,
  z: 26,
}

const MAP_SIZE = 1000

const hashFn = (key) =>
  key
    .split(``)
    .map((char) => values[char])
    .reduce((total, charVal) => total + charVal, 0) % MAP_SIZE

const createHashTable = () => {
  const table = Array(MAP_SIZE)

  return {
    table,
    get: (key) => {
      const hash = hashFn(key)
      return ((table[hash] ?? []).find(([tableKey, _]) => key === tableKey) ?? [
        undefined,
        undefined,
      ])[1]
    },
    insert: (key, value) => {
      const hash = hashFn(key)
      if (table[hash]) {
        table[hash].push([key, value])
      } else {
        table[hash] = [[key, value]]
      }
      return table
    },
    delete: (key) => {
      const hash = hashFn(key)
      const removeIdx = (table[hash] ?? []).findIndex(
        ([tableKey, _]) => key === tableKey
      )
      if (removeIdx !== -1) {
        table[hash].splice(removeIdx, 1)
      }
      return null
    },
  }
}

const hashTable = createHashTable()

hashTable.insert(`test`, 3)
hashTable.insert(`ttes`, 4)

// create a pub - sub bus with your table
const createBus = () => {
  const subs = createHashTable()

  return {
    sub: (message, cb) => {
      subs.insert(message, cb)
    },
    pub: (message) => {
      const subedFn = subs.get(message)
      if (subedFn) subedFn()
    },
    clear: (message) => {
      subs.delete(message)
    },
  }
}

const BUS = createBus()
BUS.sub(`a`, () => {
  console.log(`from A`)
})
BUS.sub(`b`, () => {
  console.log(`from B`)
})
BUS.pub(`b`)
BUS.pub(`a`)
BUS.clear(`a`)
BUS.pub(`d`)
