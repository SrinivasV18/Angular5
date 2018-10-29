"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentManagerImpl {
    constructor() {
        this.agentList = [];
        //this.agentList = [];
    }
    addAgent(agent) {
        this.agentList.push(agent);
        return 1;
    }
}
let nivas = { id: 111, name: 'Srinivas', mobileNumber: 98785945, category: 'chairmanclub' };
let ram = { id: 112, name: 'Surya', mobileNumber: 98785945 };
let mgr = new AgentManagerImpl();
mgr.addAgent(nivas);
mgr.addAgent(ram);
mgr.agentList.forEach(a => { console.log(a.name); });
