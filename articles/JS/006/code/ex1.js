const iEat = function(item1){
  return function(item2){
    return `I eat ${item1} and ${item2}`
  }
}
console.log(iEat('celery'));  // [Function]
console.log(iEat('celery')('peanut butter')); // I eat celery and peanut butter
