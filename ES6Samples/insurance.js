class LifeInsurance {
    constructor(id, policyHolderName, policyAmount) {
        this.id = id;
        this._policyHolderName = policyHolderName;
        this.policyAmount = policyAmount;
    }
    set policyHolderName(policyHolderName){
        this._policyHolderName = policyHolderName;
    }
    get getPolicyHolderName(){
        return this._policyHolderName.toUpperCase();
    }
    toString(){
        return `${this.id},${this.getPolicyHolderName},${this.policyAmount}`;
    }
}
module.exports = LifeInsurance;
