// Interfaces

// Definición de la interfaz 'Person'
// Esta interfaz describe la estructura de un objeto que representa a una persona
interface Person {
    id: number; // Propiedad 'id' de tipo número
    name: string; // Propiedad 'name' de tipo string
}

// Definición de la interfaz 'Employee' que extiende a 'Person'
// 'Employee' hereda las propiedades de 'Person' y añade una propiedad adicional 'dept'
interface Employee extends Person {
    dept: string; // Propiedad 'dept' de tipo string
}

// Definición de la interfaz 'Customer' que extiende a 'Person'
// 'Customer' hereda las propiedades de 'Person' y añade una propiedad adicional 'country'
interface Customer extends Person {
    country: string; // Propiedad 'country' de tipo string
}

// Crear una instancia de 'Employee' y 'Customer' (los comentarios comentados son para demostración)
// const emp: Employee = {}
// emp.

// const customer: Customer = {}
// customer.

// Definición de la interfaz 'Animal'
// Esta interfaz describe la estructura de un objeto que representa a un animal
interface Animal {
    name: string; // Propiedad 'name' de tipo string
    getDogs: () => void; // Método 'getDogs' que no retorna nada (void)
    getCats: () => void; // Método 'getCats' que no retorna nada (void)
}

// Definición de la clase 'Zoo' que implementa la interfaz 'Animal'
// La clase 'Zoo' debe implementar todas las propiedades y métodos definidos en 'Animal'
class Zoo implements Animal {
    name = 'Muuhh'; // Implementación de la propiedad 'name'

    // Implementación del método 'getDogs'
    getDogs(): void {
        // Lógica para obtener perros (actualmente vacía)
    }

    // Implementación del método 'getCats'
    getCats(): void {
        // Lógica para obtener gatos (actualmente vacía)
    }
}
