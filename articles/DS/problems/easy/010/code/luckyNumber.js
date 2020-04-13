function isLucky(n) {

  "use "
  let str = n.toString();
  let mid = str.length / 2;
  let firstHalf = str.slice(0, mid);
  let secondHalf = str.slice(mid, str.length);
  
  let leftTotal = 0, rightTotal = 0;
  for (let i = 0; i < firstHalf.length; i++) {
    leftTotal = leftTotal + parseInt(firstHalf[i])
  }
  for (let i = 0; i < secondHalf.length; i++) {
    rightTotal = rightTotal + parseInt(secondHalf[i])
  }
  return leftTotal === rightTotal;
}



console.log(isLucky(239017))