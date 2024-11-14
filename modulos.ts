//Import/export
//Export myFunction; import {myFunction} from './my-module';
//mkdir module
//cd module
//code .
//tsc --init
export const PI = 3.14;

export interface Person{
    id: number;
    name:string;
}

export function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100);
    
}
