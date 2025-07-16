function oddSquares (array) {
  let newArray = [];
  let evenNum = [];
  for (let i = 0; i < array.length; i++) {
    let arr = array[i];
    if(arr % 2 !== 0) {
      let squareNum = arr * arr;
      newArray.push(squareNum);
    }
  }
  return newArray;
}

console.log(oddSquares([1, 2, 5, 3, 4, 6])); 
