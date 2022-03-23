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
