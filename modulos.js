"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.generateRandomNumber = generateRandomNumber;
//Import/export
//Export myFunction; import {myFunction} from './my-module';
//mkdir module
//cd module
//code .
//tsc --init
exports.PI = 3.14;
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
