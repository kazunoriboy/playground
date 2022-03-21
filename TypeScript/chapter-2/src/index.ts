console.log('Hello TypeScript');

let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b
}
let d = c.apple * 4

function squareOf(n: number) {
  return n * n
}

let r = squareOf(2)
// let r2 = squareOf("3")

function anySample() {
  let a: any = 666
  let b: any = ['danger']
  let c = a + b
}
