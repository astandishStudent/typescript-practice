"use strict";
// basic types
let id = 5;
let company = 'Adam S LLC';
let isPublished = true;
let x = 'Hello';
// arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// tuple
let person = [1, 'Adam', true];
// tuple array
let employee;
employee = [
    [1, 'Bob'],
    [2, 'Jill'],
    [3, 'George'],
];
// Union
let pid;
pid = '22';
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 0,
    name: 'Bill'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
const user1 = {
    id: 1,
    name: 'Joey D',
    age: 45,
};
// Example of variables using interfaces
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const adam = new Person(1, 'Adam');
const julie = new Person(2, 'Julie');
// Extending class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Lemonjello', 'DJ');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strAarray = getArray(['Adam', 'Julie', 'Carl']);
numArray.push(5);
// tsc index to run index file
// tsc --init for tsconfig.json
// in outDis, set to dist folder
console.log('ID: ', id);
