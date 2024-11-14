// Definimos la interfaz Person
interface Person {
    id: number;
    name: string;
}

// Creamos la clase People
class People {
    private items: Person[] = []; // Inicializamos items como un array de Person

    // Método para agregar un nuevo elemento de tipo Person
    addItem(newItem: Person): void {
        this.items.push(newItem);
    }

    // Método para obtener y mostrar la lista de elementos
    getItems(): void {
        console.log("List of items:", JSON.stringify(this.items));
    }
}

// Ejemplo de uso
const people = new People();
people.addItem({ id: 1, name: "John Doe" });
people.addItem({ id: 2, name: "Jane Doe" });
people.getItems();
