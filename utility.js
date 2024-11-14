"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const user = {
    id: 1,
    name: 'Nico'
};
console.log(modulos_1.PI);
console.log(user);
console.log((0, modulos_1.generateRandomNumber)());
let namespaceymodulos = Utility.Taxes;
console.log(namespaceymodulos.calculateIVA(100));
console.log(namespaceymodulos.calculatePenaltyIVA(100));
