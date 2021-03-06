import { allowedNodeEnvironmentFlags } from "process"

function add(a: number, b: number): number {
  return a + b
}

function greet(name: string) {
  return 'hello' + name
}

let greet2 = function (name: string) {
  return 'hello' + name
}

let greet3 = (name: string) => {
  return 'hello' + name
}

let greet4 = (name: string) => {
  'hello' + name
}

let greet5 = new Function('name', 'return "hellot " + name')

add(1, 3)
greet('Crystal')

add(1)
add(1, 'a')

function log(message: string, userId = "Not signed in") {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId)
}
log('Page loaded')
log('User signed in', 'da763be')

function sum(numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0)
}
sum([1, 2, 3])

function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0)
}
sumVariadic(1, 2, 4)

function sumVariadicSafe(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0)
}
sumVariadicSafe(1, 3, 5)

add(10, 30)
add.apply(null, [10, 20])
add.call(null, 10, 30)
add.bind(null, 10, 39)()

function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}

fancyDate.call(new Date)
fancyDate()

function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}
let fibonacciGenerator = createFibonacciGenerator()
fibonacciGenerator.next()
fibonacciGenerator.next()
fibonacciGenerator.next()
fibonacciGenerator.next()
fibonacciGenerator.next()
fibonacciGenerator.next()

function* createNumbers(): Generator<number> {
  let n = 0
  while (1) {
    yield n++
  }
}
// let numbers = createNumbers()
// numbers.next()
// numbers.next()
// numbers.next()


let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  }
}

for (let a of numbers) {

}
let allNumbers = [...numbers]
let [one, two, ...rest] = numbers

type Greet = (name: string) => string

type Log = (message: string, userId?: string) => void

type Log2 = {
  (message: string, userId?: string): void
}

let log2: Log = (
  message,
  userId = 'Not signed in'
) => {
  let time = new Date().toISOString()
  console.log(time, message, userId);
}

type SumVariadicSafe = (...numbers: number[]) => number

function times(
  f: (index: number) => void,
  n: (number)
) {
  for (let i = 0; i < n; i++) {
    f(i)
  }
}

times(n => console.log(n), 4);

type Reservation = {
  id: number
  name: string
}

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
}

let reserve: Reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
  return { id: 1, name: 'test' }
}

type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}

function warnUser(warning: string) {
  if (warnUser.wasCalled) {
    return
  }
  warnUser.wasCalled = true
  alert(warning)
}
warnUser.wasCalled = false

const assignedWarnUser: WarnUser = warnUser

let filter: Filter1<number> = function (array, f) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

filter([1, 2, 3, 5], _ => _ < 3)
filter(['a', 'b'], _ => _ !== 'b')
filter([{}, {}, {}], _ => true);

// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }

type Filter<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}



let names = [
  { firstName: 'beth' },
  { firstName: 'caitlyn' },
  { firstName: 'xin' },
]
let result = filter(
  names,
  _ => _.firstName.startsWith('b')
)

type Filter1 = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}
let filter1: Filter1 = function (array, f) {
  return array
}

type Filter2<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}
let filter2: Filter2<number> = function (array, f) {
  return array
}

type Filter3 = <T>(array: T[], f: (item: T) => boolean) => T[]
let filter3: Filter3 = function (array, f) {
  return array
}

type Filter4<T> = (array: T[], f: (item: T) => boolean) => T[]
let filter4: Filter4<number> = function (array, f) {
  return array
}

function filter5<T>(array: T[], f: (item: T) => boolean): T[] {
  return array
}
