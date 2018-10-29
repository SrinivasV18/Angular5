interface Agent {
    id: number;
    name: string;
    mobileNumber: number;
    category?: string;
}
function printAgent(agent: Agent) {
    console.log(agent.name.toUpperCase());
}
let nivas: Agent = { id: 101, name: 'Nivas', mobileNumber: 98785945, category: 'chairmanclub' };
let ram: Agent = { id: 101, name: 'Ramesh', mobileNumber: 98785945 };
printAgent(nivas);
printAgent(ram);