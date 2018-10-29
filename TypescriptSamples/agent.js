"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printAgent(agent) {
    console.log(agent.name.toUpperCase());
}
let nivas = { id: 101, name: 'Nivas', mobileNumber: 98785945, category: 'chairmanclub' };
let ram = { id: 101, name: 'Ramesh', mobileNumber: 98785945 };
printAgent(nivas);
printAgent(ram);
