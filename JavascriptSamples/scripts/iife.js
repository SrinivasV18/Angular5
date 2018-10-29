/* 
  IIFe get invoked immediately,
  what ever functions defined in iife is local to that creates a local scope.
*/
var module = (function (msg) { 
    console.log(msg);
    function first(){
        console.log(' I am in first method..');
    }
    
    function second(){
        console.log(' I am in second method..');
    }
    return{
        one: first
    }
    //first(); -- can access
    //second(); -- can access
})('I am inside iife..');

//first(); -- no access

