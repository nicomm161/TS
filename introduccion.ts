// tsc nombrearchivo.ts 
// Compila el archivo TypeScript especificado (nombrearchivo.ts) y genera un archivo JavaScript correspondiente.


// tsc index.ts && node index.js 
// Compila el archivo TypeScript (index.ts) y luego ejecuta el archivo JavaScript generado (index.js) en Node.js, permitiendo ver la salida en la consola.


// tsc --outDir nombrecarpeta nombrearchivo.ts && node nombrecarpeta/nombrearchivo.js 
// Compila el archivo TypeScript especificado (nombrearchivo.ts), guarda el archivo JavaScript generado en el directorio especificado (nombrecarpeta) y luego ejecuta el archivo JavaScript desde esa carpeta.


// tsc --outDir dist nombrearchivo.ts --watch 
// Compila el archivo TypeScript especificado (nombrearchivo.ts), guarda el archivo JavaScript en el directorio especificado (dist) y monitoriza continuamente los cambios en el archivo TypeScript, recompilándolo automáticamente cuando se detectan cambios.


// tsc --help 
// Muestra una lista de todos los comandos y opciones disponibles de TypeScript en la consola.

//tsc --init
//Nos ayuda a iniciar nuestro proyecto

let myTypeString : string = 'Hello world' ;
let myTypeNumber : number = 33;
let myTypeBoolean : boolean = true;

// myTypeString = "true";
// myTypeNumber = false;

// Array

let arrNumber : number[] = [1,2,3];
let arrNumber2 : Array<number> = [1,2,3];
let arrStrings : string [] = ["Uno","Dos", "Tres"]

let arrAny : any[] = ['Hola', 33, false];

//Tuple 

let tuplePlayers: [string, number, boolean] = ['Doncic', 3, true];

//Tuple Array

let players: [number, string][];

players = [
    [1, 'Lebron'],
    [2, 'Curry'],
    [3, 'Durant'],
];

let myVariable;

let myVariable1: string;

let myVariable2: boolean = true;

// Unions

let myVariable3:string | number | null;





