function sortByHeight(a) {
  const validNumbers = a.filter(n => n !== -1).sort((a, b) => a - b);
  console.log(validNumbers)
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if(a[i] === -1){
      result.push(-1);
    }else{
      result.push(validNumbers.shift());
    }
  }
  return result;
}
console.log('=======================')
let a = [11, 16, 2, 2, 4, 9];
console.log(sortByHeight(a))