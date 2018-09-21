// Write a function that takes a number and a string.
// The number represents the number of rows on a plane. Each row is arranged into three "blocks" like this:

// ABC DEFG HJK ("I" ommitted for clarity)

// the string represents reserved seats, separated by spaces, in this format RowSeatletter (i.e., 1A or 3F or 10K)

// VERSION 1: the function should return the number of FULL 3-seat "blocks" on the plane. If DEFG are all occupied, only count it as ONE full block.

// VERSION 2: the function should return the number of EMPTY 3-seat "blocks" on the plane. If DEFG are all empty, only count it as ONE empty block.
// VERSION 1:

const fillSeat0 = (seat, floorplan) => {
  const [row, letter] = seat.split(``)
  const map = {
    A : [0, 0],
    B : [0, 1],
    C : [0, 2],
    D : [1, 0],
    E : [1, 1],
    F : [1, 2],
    G : [1, 3],
    H : [2, 0],
    J : [2, 1],
    K : [2, 2],
  }
  const block = map[letter][0]
  const chair = map[letter][1]
  floorplan[row][block][chair] = 1
}

const isFull0 = arr => {
  const sum = arr => arr.reduce((acc, curr) => acc + curr)
  if(arr.length === 4){
    return sum(arr.slice(0, 3)) === 3 || sum(arr.slice(1)) === 3
  }else{
    return sum(arr) === 3
  }
}

const planeFloorplan0 = (numberOfRows, seatsStr) => {
  let res = 0
  const seats = seatsStr.split(` `)
  const arr = new Array(numberOfRows + 1).fill(0).map(ele => [[0, 0, 0], [0, 0, 0, 0], [0, 0, 0]])
  seats.forEach(seat => fillSeat0(seat, arr))
  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(isFull0(arr[i][j])) res++
    }
  }
  return res
}
