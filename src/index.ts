import {toLowerCase, greet} from './utils'
export const text: string = "Hello World";

//@ts-ignore
nonExistentFunction();


console.log(text);

console.log(greet(text, new Date()));

