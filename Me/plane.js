// Write a function that takes a number and a string.
// The number represents the number of rows on a plane. Each row is arranged into three "blocks" like this:

// ABC DEFG HJK ("I" ommitted for clarity)

// the string represents reserved seats, separated by spaces, in this format RowSeatletter (i.e., 1A or 3F or 10K)

// VERSION 1: the function should return the number of FULL 3-seat "blocks" on the plane. If DEFG are all occupied, only count it as ONE full block.

// VERSION 2: the function should return the number of EMPTY 3-seat "blocks" on the plane. If DEFG are all empty, only count it as ONE empty block.

// VERSION 1:

const fillSeat0v1 = (seat, floorplan) => {
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

const isFull0v1 = arr => {
  const sum = arr => arr.reduce((acc, curr) => acc + curr)
  if(arr.length === 4){
    return sum(arr.slice(0, 3)) === 3 || sum(arr.slice(1)) === 3
  }else{
    return sum(arr) === 3
  }
}

const planeFloorplan0v1 = (numberOfRows, seatsStr) => {
  let res = 0
  const seats = seatsStr.split(` `)
  const arr = new Array(numberOfRows + 1).fill(0).map(ele => [[0, 0, 0], [0, 0, 0, 0], [0, 0, 0]])
  seats.forEach(seat => fillSeat0v1(seat, arr))
  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(isFull0v1(arr[i][j])) res++
    }
  }
  return res
}

// time complexity: n + m, where n = numberOfRows and m = number of seats
// space complexity: m, where m = number of rows
planeFloorplan0v1(4, `3G 1A 1B 3E 2B 3D 1C 3F 4H 4J`)

const seatMap1v1 = {
  A : 0,
  B : 1,
  C : 2,
  D : 3,
  E : 4,
  F : 5,
  G : 6,
  H : 7,
  J : 8,
  K : 9,
}

const fullBlocksv1 = arr => {
  let res = 0
  const sum = arr => arr.reduce((acc, curr) => acc + curr)
  if(sum(arr.slice(0, 3)) === 3) res++
  if(sum(arr.slice(3, 6)) === 3 || sum(arr.slice(4, 7)) === 3) res++
  if(sum(arr.slice(7)) === 3) res++
  return res
}

const planeFloorplan1v1 = (numberOfRows, seatsStr) => {
  let res = 0
  const seats = seatsStr.split(` `)
  const arr = new Array(numberOfRows + 1).fill(0).map(ele => new Array(10).fill(0))
  seats.forEach(seat => {
    const [row, letter] = seat.split(``)
    arr[row][seatMap1v1[letter]] = 1
  })
  for(let i = 1; i < arr.length; i++){
    res += fullBlocksv1(arr[i])
  }
  return res
}

// time complexity: n + m, where n = numberOfRows and m = number of seats
// space complexity: m, where m = number of rows
planeFloorplan1v1(4, `3G 1A 1B 3E 2B 3D 1C 3F 4H 4J`)

const planeSortv1 = (numberOfRows, seatsStr) => {
  let res = 0
  const seats = seatsStr.split(` `).sort()
  for(let i = 0; i < seats.length - 2; i++){
    const chunk = seats.slice(i, i + 3).join(``)
    const row = chunk[0]
    if(chunk === `${row}A${row}B${row}C` ||
      chunk === `${row}H${row}J${row}K` ||
      chunk === `${row}D${row}E${row}F` ||
      chunk === `${row}E${row}F${row}G` && seats[i - 1] !== `${row}D`
    ){
      res++
    }
  }
  return res
}

// time complexity: nlog(n), where n is number of seats
// space complexity: constant
planeSortv1(4, `3G 1A 1B 3E 2B 3D 1C 3F 4H 4J`)

const planeSetv1 = (numberOfRows, seatsStr) => {
  let res = 0
  const set = new Set(seatsStr.split(` `))
  for(let i = 1; i <= numberOfRows; i++){
    if(set.has(`${i}A`) && set.has(`${i}B`) && set.has(`${i}C`)){
      res++
    }
    if(set.has(`${i}D`) && set.has(`${i}E`) && set.has(`${i}F`) ||
      set.has(`${i}E`) && set.has(`${i}F`) && set.has(`${i}G`)){
      res++
    }
    if(set.has(`${i}H`) && set.has(`${i}J`) && set.has(`${i}K`)){
      res++
    }
  }
  return res
}

// time complexity: n, where n = numberOfRows (or maybe n + m, where n = numberOfRows and m = number of seats, depending on the time complexity of creating a set (I genuinely don't know))
// space complexity: n, where n = number of seats
planeSetv1(4, `3G 1A 1B 3E 2B 3D 1C 3F 4H 4J`)

// VERSION 2

const fillSeat0v2 = (seat, floorplan) => {
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

const isEmpty0v2 = arr => {
  const sum = arr => arr.reduce((acc, curr) => acc + curr)
  if(arr.length === 4){
    return sum(arr.slice(0, 3)) === 3 || sum(arr.slice(1)) === 0
  }else{
    return sum(arr) === 0
  }
}

const planeFloorplan0v2 = (numberOfRows, seatsStr) => {
  let res = 0
  const seats = seatsStr.split(` `)
  const arr = new Array(numberOfRows + 1).fill(0).map(ele => [[0, 0, 0], [0, 0, 0, 0], [0, 0, 0]])
  seats.forEach(seat => fillSeat0v2(seat, arr))
  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(isEmpty0v2(arr[i][j])) res++
    }
  }
  return res
}

// time complexity: n + m, where n = numberOfRows and m = number of seats
// space complexity: m, where m = number of rows
planeFloorplan0v2(4, `3G 1A 1B 3E 2B 3D 1C 3F 4H 4J`)

const seatMap1v2 = {
  A : 0,
  B : 1,
  C : 2,
  D : 3,
  E : 4,
  F : 5,
  G : 6,
  H : 7,
  J : 8,
  K : 9,
}

const emptyBlocksv2 = arr => {
  let res = 0
  const sum = arr => arr.reduce((acc, curr) => acc + curr)
  if(sum(arr.slice(0, 3)) === 3) res++
  if(sum(arr.slice(3, 6)) === 3 || sum(arr.slice(4, 7)) === 3) res++
  if(sum(arr.slice(7)) === 3) res++
  return res
}

const planeFloorplan1v2 = (numberOfRows, seatsStr) => {
  let res = 0
  const seats = seatsStr.split(` `)
  const arr = new Array(numberOfRows + 1).fill(0).map(ele => new Array(10).fill(0))
  seats.forEach(seat => {
    const [row, letter] = seat.split(``)
    arr[row][seatMap1v1[letter]] = 1
  })
  for(let i = 1; i < arr.length; i++){
    res += emptyBlocksv2(arr[i])
  }
  return res
}

// time complexity: n + m, where n = numberOfRows and m = number of seats
// space complexity: m, where m = number of rows
planeFloorplan1v2(4, `3G 1A 1B 3E 2B 3D 1C 3F 4H 4J`)

// Interestingly, there is no way to adapt the sorting function to solve Version 2

const planeSetv2 = (numberOfRows, seatsStr) => {
  let res = 0
  const set = new Set(seatsStr.split(` `))
  for(let i = 1; i <= numberOfRows; i++){
    if(!set.has(`${i}A`) && !set.has(`${i}B`) && !set.has(`${i}C`)){
      res++
    }
    if(!set.has(`${i}D`) && !set.has(`${i}E`) && !set.has(`${i}F`) ||
      !set.has(`${i}E`) && !set.has(`${i}F`) && !set.has(`${i}G`)){
      res++
    }
    if(!set.has(`${i}H`) && !set.has(`${i}J`) && !set.has(`${i}K`)){
      res++
    }
  }
  return res
}

// time complexity: n, where n = numberOfRows (or maybe n + m, where n = numberOfRows and m = number of seats, depending on the time complexity of creating a set (I genuinely don't know))
// space complexity: n, where n = number of seats
planeSetv2(4, `3G 1A 1B 3E 2B 3D 1C 3F 4H 4J`)
