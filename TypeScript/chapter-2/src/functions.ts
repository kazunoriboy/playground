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
