// Funciones

// Función 'greet' que recibe un parámetro 'name' de tipo string
function greet(name: string) {
    // Imprimir un saludo en la consola, convirtiendo el nombre a mayúsculas
    console.log(`Hello, ${name.toUpperCase()}!!`);
}

// Llamar a la función 'greet' con el argumento 'Nico'
greet('Nico'); // Salida: Hello, NICO!!

// Función 'getNumber' que no recibe parámetros y retorna un número
function getNumber(): number {
    // Retornar un número aleatorio entre 0 y 99, redondeado hacia abajo
    return Math.floor(Math.random() * 100);
}

// Imprimir el resultado de llamar a 'getNumber' en la consola
console.log(getNumber()); // Salida: un número aleatorio entre 0 y 99

// Función 'printPosition' que recibe un objeto 'position' con propiedades 'lat' y 'long'
function printPosition(position: { lat: number, long: number }) {
    // Imprimir la latitud y longitud en la consola
    console.log(`Latitude & Longitude are: LAT ${position.lat} LONG: ${position.long}`);
}

// Llamar a la función 'printPosition' con un objeto de ejemplo
printPosition({ lat: 3, long: 55 }); // Salida: Latitude & Longitude are: LAT 3 LONG: 55
