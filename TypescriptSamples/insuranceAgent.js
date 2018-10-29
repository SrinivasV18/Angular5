"use strict";
class InsuranceAgent {
    constructor(agentCode, agentName) {
        this._agentCode = agentCode;
        this._agentName = agentName;
    }
    toString() {
        return `${this._agentName},${this._agentName}`;
    }
    set agentCode(agentCode) {
        if (agentCode < 0 || agentCode > 2000) {
            throw Error('Invalid Agent code..');
        }
        this._agentCode = agentCode;
    }
    set agentName(agentName) {
        this._agentName = agentName;
    }
    get agentCode() {
        return this._agentCode;
    }
    get agentName() {
        return this._agentName;
    }
}
try {
    const nivas = new InsuranceAgent(101, 'Nivas');
    nivas.agentCode = -4;
    console.log(nivas.agentName);
}
catch (ex) {
    console.log(ex.message);
}
