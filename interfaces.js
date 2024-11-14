"use strict";
// ¿Qué es una interface?
// Es una definición de contrato de código, una interface define la forma del dato con el que vamos a trabajar
// Crear un objeto que implemente la interfaz 'Book'
const book = {
    id: 1, // Asignar el id del libro
    title: 'My title', // Asignar el título del libro
    author: 'Nico' // Asignar el autor del libro
};
// Crear un array vacío que solo puede contener objetos del tipo 'Book'
const books = [];
// Definir una función que retorna un objeto de tipo 'Book'
function getBook() {
    // Retornar un objeto que implementa la interfaz 'Book'
    return { id: 1, title: 'My title', author: 'Nico' };
}
// Llamar a la función 'getBook' y guardar el resultado en la constante 'myBook'
const myBook = getBook();
// Definir una función que recibe y retorna un objeto de tipo 'Book'
function createBook(book) {
    // Retornar el objeto recibido como argumento
    return book;
}
// Crear un nuevo objeto que implementa la interfaz 'Book'
const newBook = { id: 1, title: 'My title', author: 'Nico' };
// Llamar a la función 'createBook' pasando el nuevo objeto 'newBook'
createBook(newBook);
