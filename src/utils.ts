export const toLowerCase = (str: string) => {
  return str.toLowerCase();
}

 export function greet(person: string, date: Date) {
   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
   return `Hello ${person}, today is ${date.toDateString()}!`;
}