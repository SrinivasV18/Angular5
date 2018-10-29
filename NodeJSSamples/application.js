var bankModule = require('./bankAccount');
//console.log(global);  -- in node.js , global variable is global.
console.log(bankModule.simpleInterest());
console.log(bankModule.coumpoundInterest());
console.log(bankModule.specialInterest());