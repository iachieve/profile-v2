function a() {
  let grandpa = 'grandpa';
  return function b() {
    let father = 'father';
    return function c() {
      let son = 'son';
      return `${grandpa} > ${father} > ${son}`;
    }
  }
}
console.log(a()()); // grandpa > father > son

  // How the function son have access to grandpa & father variables
  // Same Code with comments

function a() {
  /* 
    a-scope: this is the function a() scope
    we declared "grandpa" variable in function a() scope
  */
  let grandpa = 'grandpa';

  return function b() {
    /*
      b-scope: this the function b() scope
      we declared "father" variable in function b() scope
    */
    /*  
      function b() has access to the parent function variables
      in a different word: we can the variable grandpa here in this 
      child function
    */
    let father = 'father';
    return function c() {
    /*
      c-scope: this the function c() scope
      we declared "son" variable in function b() scope
    */
    /*
      function c() has access to all its parent functions scopes
    */

      let son = 'son';
      return `${grandpa} > ${father} > ${son}`; // grandpa > father > son
    }
  }
}