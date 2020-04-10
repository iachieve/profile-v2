const iEat = item1 => item2 => `I eat ${item1} and ${item2}`

console.log(iEat('celery'));  // [Function]
console.log(iEat('celery')('peanut butter')); // I eat celery and peanut butter
