// basic types
let id: number = 5
let company: string = 'Adam S LLC'
let isPublished: boolean = true
let x: any = 'Hello'

// arrays
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'Hello']

// tuple
let person: [number,string,boolean] = [1,'Adam',true]

// tuple array
let employee: [number,string][]

employee = [
  [1,'Bob'],
  [2,'Jill'],
  [3,'George'],
]

// Union
let pid: string | number

pid = '22'

// Enums
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction1.Up)

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 0,
  name: 'Bill'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number,y: number): number {
  return x + y
}

console.log(addNum(1,2))

// Interfaces - Preferred over Types. Types can use primitives or unions.
interface UserInterface {
  id: number,
  name: string
  age: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Joey D',
  age: 45,
}
/////////////////////////////////////////////////////////////////
interface MathFunc {
  (x: number, y: number): number
}

// Example of variables using interfaces
const add: MathFunc = (x: number, y: number): number => x+y
const sub: MathFunc = (x: number, y: number): number => x-y

interface PersonInterface {
  id: number,
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const adam = new Person(1, 'Adam')
const julie = new Person(2, 'Julie')

// Extending class
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id,name)
    this.position = position
  }
}

const emp = new Employee(3,'Lemonjello','DJ')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strAarray = getArray<string>(['Adam','Julie','Carl'])

numArray.push(5)



// tsc index to run index file
// tsc --init for tsconfig.json
// in outDis, set to dist folder
console.log('ID: ', id)
