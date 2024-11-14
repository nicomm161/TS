"use strict";
// Type Assertion en TypeScript
// Declaración de una variable 'channel' con tipo 'any' y valor inicial 'Nico'
let channel = 'Nico';
// Type Assertion utilizando el operador '<>' para convertir 'channel' a tipo 'string'
// let channelStr = <string> channel;
// Type Assertion utilizando el operador 'as' para convertir 'channel' a tipo 'string'
let channelStr = channel;
// Declaración de una constante 'myCanvas' obteniendo un elemento del DOM con el ID 'main'
// Type Assertion utilizando el operador 'as' para convertir el elemento a tipo 'HTMLCanvasElement'
// const myCanvas = document.getElementById('main') as HTMLCanvasElement;
const myCanvas = document.getElementById('main');
