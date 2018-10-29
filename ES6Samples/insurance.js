class LifeInsurance {
    constructor(id, policyHolderName, policyAmount) {
        this.id = id;
        this.policyHolderName = policyHolderName;
        this.policyAmount = policyAmount;
    }
    get getPolicyHolderName(){
        return this.policyHolderName;
    }
    toString(){
        return `${this.id},${this.policyHolderName},${this.policyAmount}`;
    }
}
module.exports = LifeInsurance;
