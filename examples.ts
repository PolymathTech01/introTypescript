// Type Annotations
let myName: string = 'alli';

// Inferred Types
// if a variable is declared and assigned to a value at the same time, then no type annotations required
let favNumber = 12;
let favPerson = 'person';
let isLoggedIn = false;

function addNumber(a: number, b: number) {
  return a + b;
}
let result = addNumber(12, favNumber);
console.log(result);

const numbers = [12, 13, 14, 15, 16, 17, 18, 19];
//no need to define the return type of a function because the parameter types are already defined.

// Union Types
let numbersAndStrings = [11, 12, 12, 'day', 'month', 'year', 'quarter'];

// Objects and Interfaces
// type StreamerType = 'affiliate' | 'partner';

// interface Person {
//   name: string;
//   age: number;
//   dogName?: string;
//   streamerType: StreamerType;
//   currentTime?(): Date;
// }

// function greet(person: Person) {
//   if (person.currentTime) {
//     return `Hello ${person.name} your age is ${
//       person.age
//     } the currentTime is ${person.currentTime()} `;
//   }
//   return `Hello ${person.name} your age is ${person.age} `;
// }
// console.log(
//   greet({
//     name: 'Alli',
//     age: 12,
//     dogName: 'Dog',
//     streamerType: 'affiliate',
//     currentTime() {
//       return new Date();
//     },
//   })
// );

// // Optional Properties

// // type Person = {
// //   name: string;
// //   age: number;
// //   dogName?: string;
// // };
// function greetPersonAndDog(person: Person) {
//   if (person.dogName) {
//     return `${person.name} Your dogName is ${person.dogName}`;
//   }
//   return greet(person);
// }
// console.log(
//   greetPersonAndDog({
//     name: 'Alli',
//     age: 12,
//     dogName: 'Dog',
//     streamerType: 'affiliate',
//   })
// );

// Classes
// read on definiate assignment assertion
// class Person {
//   name: string;
//   age: number;
//   dogName?: string;
//   constructor(name: string, age: number, dogName: string | undefined) {
//     this.name = name;
//     this.age = age;
//     this.dogName = dogName;
//   }
// }
class Person {
  static specie = 'homosapiens';
  constructor(
    public name: string,
    public age: number,
    public dogName: string | undefined,
    protected secret: string,
    private email: string
  ) {}
}

const alli = new Person('alli', 12, 'dogName', 'secret', 'alli@gmail.com');
console.log(alli.age, alli.dogName, alli.name);
console.log(Person.specie);
// Generics

function sortItems<T = number, S = string>(
  items: T[],
  compareFunction: (a: T, b: T) => number
): (T | S)[] {
  return items.sort(compareFunction);
}
const myNumbers = [1, 3, 4, 5, 6, 22, 33, 90, 22];
const sortedNumbers = sortItems(myNumbers, (a, b) => a - b);
console.log(sortedNumbers);
const names = ['taiwo', 'oluwanifemi', 'alli', 'olarinde', 'adetoro'];
const sortedNames = sortItems<string>(names, (a, b) => a.localeCompare(b));
console.log(sortedNames);
// any, unknown, never
// Type Assertions

var x = ('hello' as unknown) as number; // dont do this
x = ('hello' as unknown) as number; // dont do this either
// @ts-ignore / @ts-nocheck

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
let anotherFruit = 'apple';
// @ts-ignore
// this should be used as a last resort and also when converting a js code to a ts node // @ts-nocheck is used to disable all type checking for ts
anotherFruit = 11;
