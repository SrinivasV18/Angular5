let LifeInsurance = require('./insurance');
class Application {
    static main() {
        const nivas = new LifeInsurance(101, 'Nivas', 2323232);
        const venki = new LifeInsurance(102, 'Venki', 5656232);

        const policyList = [nivas, venki];
        for (let i = 0; i < policyList.length; i++) {
            console.log(policyList[i].toString());
            console.log(policyList[i].getPolicyHolderName);
        }
    }
    //console.log(i);
}
Application.main();