console.log('Hello TypeScript');

function typeInference() {
  let a = 1 + 2
  let b = a + 3
  let c = {
    apple: a,
    banana: b
  }
  let d = c.apple * 4
}

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

function unknownSample() {
  let a: unknown = 30
  let b = a === 123
  let c = a + 10
  if (typeof a === 'number') {
    let d = a + 10
  }
}

function boolSample() {
  let a = true
  var b = false
  const c = true
  let d: boolean = true
  let e: true = true
  let f: true = false
}

function numberSample() {
  let a = 1234
  var b = Infinity * 0.10
  const c = 5678
  let d = a < b
  let e: number = 100
  let f: 26.218 = 26.218
  let g: 26.218 = 10
}

function bigIntSample() {
  let a = 1234n
  const b = 5678n
  var c = a + b
  let d = a < 1234
  let e = 88.5n
  let f: bigint = 100n
  let g: 100n = 100n
  let h: bigint = 100
}

function stringSample() {
  let a = 'hello'
  var b = 'billy'
  const c = '!'
  let d = a + ' ' + b + c
  let e: string = 'zoom'
  let f: 'john' = 'john'
  let g: 'john' = 'zoe'
}
