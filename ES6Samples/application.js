let LifeInsurance = require('./insurance');
const nivas = new LifeInsurance(101,'Nivas',2323232);
console.log(nivas.toString());
console.log(nivas.getPolicyHolderName);