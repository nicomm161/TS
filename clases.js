"use strict";
class Person {
    constructor() {
        this.zone = 'Caribean';
        this.city = 'Santo Domingo';
        this.country = 'R.D';
    }
    greet() {
        console.log('Hello');
    }
}
class Employee extends Person {
    // Constructor para inicializar las propiedades al crear una instancia de la clase
    constructor(id, name, dept) {
        super();
        this.id = id; // Asigna el valor de 'id' a la propiedad 'id'
        this.name = name; // Asigna el valor de 'name' a la propiedad 'name'
        this.dept = dept; // Asigna el valor de 'dept' a la propiedad 'dept'
        this.showInfo(); // Llamada al método 'showInfo' después de inicializar las propiedades
    }
    // Método 'showInfo' que imprime el nombre en la consola
    showInfo() {
        this.zone;
        this.city;
        console.log(`${this.name} ${this.dept}`); // Imprime el nombre de la instancia en la consola
    }
}
// Crear una nueva instancia de la clase 'Employee' con los valores proporcionados
const emp = new Employee(1, 'Nico', 'Informático');
// Resultado: Imprime 'Nico' en la consola
//Acceso control keyword
//Public, todos pueden acceder
//Private, restringido solo a la clase que se define
//Protected, permitido dentro solo de la clase y sus subclases
