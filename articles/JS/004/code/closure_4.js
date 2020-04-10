// big array will be created once
// the console log will run one time
function heavyDuty2(index) {
  const bigArray = new Array(7000).fill('whatever');
  console.log('created again')
  return function(index){
    return bigArray[index]
  };
}; 

const heavyDutyObj = heavyDuty2();
heavyDutyObj(500);
heavyDutyObj(600);
heavyDutyObj(700);