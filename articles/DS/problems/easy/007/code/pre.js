let matrix = [[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]];

let matrix2 = 
[[1, 1, 1, 0],
[0, 5, 0, 1],
[2, 1, 3, 10]];


function matrixElementsSum(matrix) {
  let sum = 0;
  let haunted = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if(matrix[r][c] === 0){
        haunted.push(c);
        continue;
      }
      if(!haunted.includes(c) && matrix[r][c] !== 0){
        sum += matrix[r][c]
      }
    }
  }
  return sum
}

// console.log(matrixElementsSum(matrix));
console.log(matrixElementsSum(matrix2));
