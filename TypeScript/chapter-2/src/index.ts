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

function symbolSample() {
  let a = Symbol('a')
  let b: symbol = Symbol('b')
  var c = a === b
  let d = a + 'x'
  const e = Symbol('e')
  const f: unique symbol = Symbol('f')
  let g: unique symbol = Symbol('f')
  let h = e === e
  let i = e === f
}

function objectSample() {
  let a: { b: number } = {
    b: 12
  }
  a.b
  a = {}
  a = {
    b: 1,
    c: 2
  }
  let b = {
    c: {
      d: 'f'
    }
  }

  let c: {
    firstName: string
    lastName: string
  } = {
    firstName: 'john',
    lastName: 'barrowman'
  }

  class Person {
    constructor(
      public firstName: string,
      public lastName: string
    ) { }
  }
  c = new Person('matt', 'smith')

  let d: {
    e: number
    f?: string
    [key: number]: boolean
  }
  d = { e: 1 }
  d = { e: 1, f: undefined }
  d = { e: 1, f: 'd' }
  d = { e: 1, 10: true }
  d = { e: 1, 10: true, 20: false }
  d = { 10: true }
  d = { b: 1, 33: 'red' }

}
