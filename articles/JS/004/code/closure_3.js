function heavyDuty(index){
  const bigArray = new Array(7000).fill('whatever');
  console.log('big array created');
  return bigArray[index];
};

heavyDuty(500); // console log : big array created
heavyDuty(500); // console log : big array created
heavyDuty(500); // console log : big array created