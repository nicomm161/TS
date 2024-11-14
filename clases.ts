class Person{
    public zone = 'Caribean';
    protected city = 'Santo Domingo';
    private country = 'R.D'
    constructor(){}

    greet():void{
        console.log('Hello');
        
    }
}


class Employee extends Person{
    // Propiedades de la clase 'Employee'
    id: number; // Propiedad 'id' de tipo número
    name: string; // Propiedad 'name' de tipo string
    dept: string; // Propiedad 'dept' de tipo string

    // Constructor para inicializar las propiedades al crear una instancia de la clase
    constructor(id: number, name: string, dept: string) {
        super();
        this.id = id; // Asigna el valor de 'id' a la propiedad 'id'
        this.name = name; // Asigna el valor de 'name' a la propiedad 'name'
        this.dept = dept; // Asigna el valor de 'dept' a la propiedad 'dept'
        this.showInfo(); // Llamada al método 'showInfo' después de inicializar las propiedades
    }

    // Método 'showInfo' que imprime el nombre en la consola
    showInfo(): void {
        this.zone
        this.city
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

