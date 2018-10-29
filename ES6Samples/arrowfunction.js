let LifeInsurance = require('./insurance');
class Application {
    static main() {
        const nivas = new LifeInsurance(101, 'Nivas', 2323232);
        const venki = new LifeInsurance(102, 'Venki', 5656232);

        const policyList = [nivas, venki];
        policyList.forEach(p => console.log(p.toString()));
        let nameList = policyList.map(p => p.getPolicyHolderName);
        console.log(nameList);

        let amountList = policyList.map(p => p.policyAmount);

        function showPremium(policyAmount = 2000) {
            console.log(policyAmount * 0.20);
        }

        showPremium(amountList[0]);
        showPremium(amountList[1]);
        showPremium();

        function printPremium(...listPolicy){
            listPolicy.forEach(p=> {
                showPremium(p.policyAmount);
            })
        }

        printPremium(nivas);
        printPremium(nivas,venki);
    }
    //console.log(i);
}
Application.main();