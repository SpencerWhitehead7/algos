const theSouth = {
  // prettier-ignore
  memphis: [
    `nashville`,
    `atlanta`,
    `mobile`,
    `newOrleans`,
  ],
  nashville: [`atlanta`],
  atlanta: [`savannah`],
  mobile: [`savannah`],
  newOrleans: [`mobile`],
  savannah: [],
}

const topologicalSort = (graph) => {
  const inBounds = Object.values(graph).reduce((acc, curr) => {
    curr.forEach((node) => {
      acc[node] = acc[node] ? acc[node] + 1 : 1
    })
    return acc
  }, {})

  const sorted = Object.keys(graph).filter((node) => !inBounds[node])

  let i = 0
  while (i < sorted.length) {
    const curr = sorted[i]
    graph[curr].forEach((outbound) => {
      inBounds[outbound]--
      if (inBounds[outbound] === 0) sorted.push(outbound)
    })
    i++
  }

  if (sorted.length === Object.keys(graph).length) {
    return sorted
  } else {
    throw new Error(`Cycle detected`)
  }
}

console.log(topologicalSort(theSouth))
