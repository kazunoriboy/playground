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
