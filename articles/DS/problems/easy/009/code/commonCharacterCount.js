function commonCharacterCount(s1, s2) {
  let hash1 = {}, count = 0;
  for (let i = 0; i < s1.length; i++) {
    const curr = s1[i];
    if(hash1[curr]){
      hash1[curr] = hash1[curr] + 1; 
    }else{
      hash1[curr] = 1;
    }
  };


  console.log(hash1);


  for (let i = 0; i < s2.length; i++) {
    let curr = s2[i];
    if (hash1[curr]){
      count++;
      if (hash1[curr] > 1){
        hash1[curr] = hash1[curr] - 1
      }else{
        delete hash1[curr]
      }
    }
  }
  return count;
}

let s1 = "aabcc";
let s2 = "adcaa";
// 3
console.log(commonCharacterCount(s1, s2))