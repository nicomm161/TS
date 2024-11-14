// ¿Qué es una interface?
// Es una definición de contrato de código, una interface define la forma del dato con el que vamos a trabajar

interface Book {
    id: number; // Propiedad 'id' de tipo número
    title: string; // Propiedad 'title' de tipo string
    author: string; // Propiedad 'author' de tipo string
    coAuthor?: string; // Propiedad 'coAuthor' opcional de tipo string, indicada por el símbolo '?'
    isLoan?: (id: number) => void; // Método opcional 'isLoan' que recibe un número (id) como parámetro y no retorna nada (void)
}

// Crear un objeto que implemente la interfaz 'Book'
const book: Book = {
    id: 1, // Asignar el id del libro
    title: 'My title', // Asignar el título del libro
    author: 'Nico' // Asignar el autor del libro
}

// Crear un array vacío que solo puede contener objetos del tipo 'Book'
const books: Book[] = [];

// Definir una función que retorna un objeto de tipo 'Book'
function getBook(): Book {
    // Retornar un objeto que implementa la interfaz 'Book'
    return { id: 1, title: 'My title', author: 'Nico' };
}

// Llamar a la función 'getBook' y guardar el resultado en la constante 'myBook'
const myBook = getBook();

// Definir una función que recibe y retorna un objeto de tipo 'Book'
function createBook(book: Book): Book {
    // Retornar el objeto recibido como argumento
    return book;
}

// Crear un nuevo objeto que implementa la interfaz 'Book'
const newBook: Book = { id: 1, title: 'My title', author: 'Nico' }

// Llamar a la función 'createBook' pasando el nuevo objeto 'newBook'
createBook(newBook);
