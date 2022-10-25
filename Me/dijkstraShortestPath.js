const theSouth = {
  memphis: {
    nashville: 15,
    atlanta: 10,
    mobile: 7,
    newOrleans: 3,
  },
  nashville: {
    memphis: 15,
    atlanta: 2,
  },
  atlanta: {
    nashville: 2,
    memphis: 10,
    savannah: 1,
    mobile: 2,
  },
  mobile: {
    newOrleans: 3,
    memphis: 7,
    atlanta: 2,
    savannah: 6,
  },
  newOrleans: {
    memphis: 3,
    mobile: 3,
  },
  savannah: {
    atlanta: 1,
    mobile: 6,
  },
}

function FakePQ(startingQueue) {
  this.queue = startingQueue
  this.length = this.queue.length
}

FakePQ.prototype.popSmallest = function () {
  const smallest = this.queue.reduce(
    (smallestSoFar, curr) =>
      curr.cost <= smallestSoFar.cost ? curr : smallestSoFar,
    { cost: Infinity }
  )

  this.length--
  return this.queue.splice(this.queue.indexOf(smallest), 1)[0]
}

const dijkstra = (graph, start, end) => {
  const resultTable = Object.keys(graph).reduce((memo, key) => {
    memo[key] = {
      vertex: key,
      visited: false,
      cost: key === start ? 0 : Infinity,
      via: null,
    }
    return memo
  }, {})

  const queue = new FakePQ(Object.values(resultTable))
  while (queue.length) {
    const current = queue.popSmallest()

    for (const [neighborVertex, neighborCost] of Object.entries(
      graph[current.vertex]
    )) {
      if (!resultTable[neighborVertex].visited) {
        if (resultTable[neighborVertex].cost > neighborCost + current.cost) {
          resultTable[neighborVertex].cost = neighborCost + current.cost
          resultTable[neighborVertex].via = current.vertex
        }
      }
    }
    current.visited = true
  }

  // return resultTable
  const path = []
  let backTrack = end
  while (resultTable[backTrack]) {
    path.push(backTrack)
    backTrack = resultTable[backTrack].via
  }

  return path.reverse()
}

dijkstra(theSouth, `memphis`, `atlanta`)

// {
//   memphis: { cost: 0, via: null },
//   nashville: { cost: 10, via: 'atlanta' },
//   atlanta: { cost: 8, via: 'mobile' },
//   mobile: { cost: 6, via: 'newOrleans' },
//   newOrleans: { cost: 3, via: 'memphis' },
//   savannah: { cost: 9, via: 'atlanta' }
// }
