import { assert } from "console";

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

  let airplaneSeatingAssignments: {
    [seatNumber: string]: string
  } = {
    '34D': 'Boris Cherny',
    '34E': 'Bill Gates'
  }

  let user: {
    readonly firstName: string
  } = {
    firstName: 'abby'
  }

  user.firstName
  user.firstName = 'abby with an e'

  let danger: {}
  danger = {}
  danger = { x: 1 }
  danger = []
  danger = 2

}

function typeAriasSample() {
  type Age = number
  type Person = {
    name: string
    age: Age
  }

  let age: Age = 55

  let driver: Person = {
    name: 'James May',
    age: age
  }

  type Color = 'red'

  let x = Math.random() < .5

  if (x) {
    type Color = 'blue'
    let b: Color = 'blue'
  } else {
    let c: Color = 'red'
  }
}

function unionAndIntersectionSample() {
  type Cat = { name: string, purrs: boolean }
  type Dog = { name: string, barks: boolean, wags: boolean }
  type CatOrDogOrBoth = Cat | Dog
  type CatAndDog = Cat & Dog

  // Catのみ
  let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
  }

  // Dogのみ
  a = {
    name: 'Domino',
    barks: true,
    wags: true
  }

  //  両方
  a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
  }

  let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
  }

  type Return = string | null

  function trueOrNull(isTrue: boolean): Return {
    if (isTrue) {
      return 'true'
    }
    return null
  }

  function truethy(a: string, b: number) {
    return a || b
  }
}

function arraySample() {
  let a = [1, 2, 3]
  var b = ['a', 'b']
  let c: string[] = ['a']
  let d = [1, 'a']
  const e = [2, 'b']

  let f = ['red']
  f.push('blue')
  f.push(true)

  let g = []
  g.push(1)
  g.push('red')

  let h: number[] = []
  h.push(1)
  h.push('red')

  function buildArray() {
    let a = []
    a.push(1)
    a.push('x')
    return a
  }
  let myArray = buildArray()
  myArray.push(true)
}

function tupleSample() {
  let a: [number] = [1]
  let b: [string, string, number] = ['malcom', 'gladwell', 1963]
  b = ['queen', 'elixabeth', 'ii', 1926]

  let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
  ]

  let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
  let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

  let as: readonly number[] = [1, 2, 3]
  let bs: readonly number[] = as.concat(4)
  let three = bs[2]
  as[4] = 5

  as.push(6)

  type A = readonly string[]
  type B = ReadonlyArray<string>
  type C = Readonly<string[]>

  type D = readonly [number, string]
  type E = Readonly<[number, string]>
}

function nullUndefinedVoidNeverSample() {
  function a(x: number) {
    if (x < 10) {
      return x
    }
    return null
  }

  function b() {
    return undefined
  }

  function c() {
    let a = 2 + 2
    let b = a * a
  }

  function d() {
    throw TypeError('I always error')
  }

  function e() {
    while (true) {
      doSomething()
    }
  }

  function doSomething() { }
}

function enumSample() {
  enum Language {
    English = 0,
    Spanish = 1,
    Russian = 2
  }

  let myFirstLanguage = Language.Russian
  let mySecondLanguage = Language['English']

  const enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050,
    White = 255
  }

  let red = Color.Red
  let pink = Color.Pink

  let a = Color.Red
  let b = Color.Green

  let c = Color[255]
  let d = Color[6]

  const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table'
  }

  function flip(f: Flippable) {
    return 'flipped it'
  }
  flip(Flippable.Chair)
  flip(Flippable.Cup)
  flip(12)
}

function practice() {
  let a = 1042
  let b = 'apples and oranges'
  const c = 'pineapples'
  let d = [true, true, false]
  let e = { type: 'ficus' }
  let f = [1, false]
  const g = [3]
  let h = null

  let i: 3 = 3
  i = 4

  let j = [1, 2, 3]
  j.push(4)
  j.push('5')

  let k: never = 4

  let l: unknown = 4
  let m = l * 2
}

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}

map(
  ['a', 'b', 'c'],
  _ => _ === 'a'
)

map<string, boolean>(
  ['a', 'b', 'c'],
  _ => _ === 'a'
)

let promise = new Promise<number>(resolve => resolve(45))
promise.then(result => result * 4)

type MyEvent<T extends HTMLElement = HTMLElement> = {
  target: T
  type: string
}

type MyEvent2<Type extends string, Target extends HTMLElement = HTMLElement> = {
  target: Target
  type: Type
}

type MyEvent3<Target extends HTMLElement = HTMLElement, Type extends string> = {
  target: Target
  type: Type
}

type ButtonEvent = MyEvent<HTMLButtonElement>

let myEvent: MyEvent = {
  target: document.querySelector('#myButton'),
  type: 'click'
}

type TimedEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
}

function triggerEvent<T>(event: MyEvent<T>): void {
  //
}
triggerEvent({
  target: document.querySelector('#myButton'),
  type: 'mouseover'
})

type TreeNode = {
  value: string
}
type LeafNode = TreeNode & {
  isLeaf: true
}
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

let a: TreeNode = { value: 'a' }
let b: LeafNode = { value: 'b', isLeaf: true }
let c: InnerNode = { value: 'c', children: [b] }

let a1 = mapNode(a, _ => _.toUpperCase())
let b1 = mapNode(b, _ => _.toUpperCase())
let c1 = mapNode(c, _ => _.toUpperCase())

function mapNode<T extends TreeNode>(
  node: T,
  f: (value: string) => string
): T {
  return {
    ...node,
    value: f(node.value)
  }
}

type HasSides = { numberOfSides: number }
type SidesHaveLength = { sideLength: number }

function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape): Shape {
  console.log(s.numberOfSides * s.sideLength);
  return s
}

type Square = HasSides & SidesHaveLength
let square: Square = { numberOfSides: 4, sideLength: 3 }
logPerimeter(square)

function call<T extends unknown[], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value)
}

let aa = call(fill, 10, 'a')
let bb = call(fill, 10)
let cc = call(fill, 10, 'a', 'z')

type Reservation = unknown

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
  (destination: string): Reservation
}

let Reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    // 宿泊予約
    return
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === 'string'
  ) {
    // 日帰り予約
    return
  } else if (typeof fromOrDestination === 'string') {
    // すぐに予約する
    return
  }
}

class Game { }

abstract class Piece {
  protected position: Position

  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): boolean
}

type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
  constructor(
    private file: File,
    private rank: Rank
  ) { }

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Queen extends Piece { }
class Bishop extends Piece { }
class Knight extends Piece { }
class Rook extends Piece { }
class Pawn extends Piece { }

class Game {
  private pieces = Game.makePieces()

  private static makPieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      new Queen('White', 'D', 1),
      // 以下省略
    ]
  }
}

class MySet {
  private list: number[] = []
  has(value: number): boolean {
    return this.list.indexOf(value) !== -1
  }

  add(value: number): this {
    this.list.push(value)
    return this
  }
}

class MutableSet extends MySet {
  delete(value: number): boolean {
    return false;
  }
}

let set = new MySet
set.add(1).add(2).add(3)
set.has(2)
set.has(3)

// interface Sushi {
//   calories: number
//   salty: boolean
//   tasty: boolean
// }

// type Cake = {
//   calories: number
//   sweet: boolean
//   tasty: boolean
// }

interface Food {
  calories: number
  tasty: boolean
}

interface Sushi extends Food {
  salty: boolean
}
interface Cake extends Food {
  sweet: boolean
}

interface User {
  name: string
}

interface User {
  age: number
}

interface User {
  age: string
}

let user_a: User = {
  name: 'Ashley',
  age: 30
}

type User2 = {
  name: string
}

type User2 = {
  age: number
}

interface User3<Age extends number> {
  age: Age
}

interface User3<Age extends string> {
  age: Age
}

let user_b: User3 = {
  age: 10
}

interface Animal {
  eat(food: string): void
  sleep(hours: number): void
}

class Cat implements Animal {
  eat(food: string) {
    console.info('Ate some', food, '. Mmm!')
  }
  sleep(hours: number) {
    console.info('slept for', hours, 'hours')
  }
}
