function callMeMaybe() {
  setTimeout(function () {
    console.log(callMe);
  }, 4000);
  const callMe = 'Hi, I am now here!';
}
callMeMaybe() // Hi, I am now here!

/*
  the setTimeout function have access to 
  the variables declared later in the function
  because the closure created.
  the closure created and the child function 
  have access to the parent function variables
*/

