import { AgentManager } from "./agentManager";
import { Agent } from './agent';

class AgentManagerImpl implements AgentManager {
    agentList: Agent[] = [];

    constructor() {
        //this.agentList = [];
    }
    addAgent(agent: Agent): number {
        this.agentList.push(agent);
        return 1;
    }
}

let nivas: Agent = { id: 111, name: 'Srinivas', mobileNumber: 98785945, category: 'chairmanclub' };
let ram: Agent = { id: 112, name: 'Surya', mobileNumber: 98785945 };

let mgr = new AgentManagerImpl();
mgr.addAgent(nivas);
mgr.addAgent(ram);

mgr.agentList.forEach(a => { console.log(a.name) });