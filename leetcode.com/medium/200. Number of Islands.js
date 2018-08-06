// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid){
  if(grid.length === 0) return 0
  grid = addEdges(grid)
  let islands = 0
  for(let vert=1; vert<grid.length-1; vert++){
    for(let hori=1; hori<grid[vert].length-1; hori++){
      if(grid[vert][hori] === `1`){
        islands++
        grid[vert][hori] = `2`
        const queue = [{v : vert, h : hori}]
        while(queue.length > 0){
          const loc = queue.shift()
          const neighbors = [[loc.v-1, loc.h], [loc.v, loc.h+1], [loc.v+1, loc.h], [loc.v, loc.h-1]]
          for(let i=0; i<neighbors.length; i++){
            if(grid[neighbors[i][0]][neighbors[i][1]] === `1`){
              grid[neighbors[i][0]][neighbors[i][1]] = `2`
              queue.push({v : neighbors[i][0], h : neighbors[i][1]})
            }
          }
        }
      }
    }
  }
  return islands
}

const addEdges = grid => {
  grid.forEach(row => {
	  row.push(`0`)
	  row.unshift(`0`)
  })
  const caps = new Array(grid[0].length).fill(`0`)
  grid.unshift(caps)
  grid.push(caps)
  return grid
}
