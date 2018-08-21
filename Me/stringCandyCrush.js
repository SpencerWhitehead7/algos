// The input is a string that contains capital letters. If there are three or more same letters in a row, you need to compress them. You need to compress until there are there are no three or more letters are next to each other.  

const stringCandyCrush = str => {
  const uncompressed = str.split(``)
  const compressed = [uncompressed[0], uncompressed[1]]
  let i = 2
  while(i<uncompressed.length){
    if(uncompressed[i] === compressed[compressed.length-1] &&
    uncompressed[i] === compressed[compressed.length-2]
    ){
      compressed.pop()
    }else{
      compressed.push(uncompressed[i])
    }
    i++
  }
  console.log(uncompressed)
  console.log(i)
  return compressed.join(``)
}
