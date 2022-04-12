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
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  name = 'Whiskers'
  eat(food: string) {
    console.info('Ate some', food, '. Mmm!')
  }
  sleep(hours: number) {
    console.info('slept for', hours, 'hours')
  }
  meow() {
    console.info('Meow')
  }
}

class Zebra {
  trot() {

  }
}

class Poodle {
  trot() {

  }
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle)

class A {
  private x = 1
}
class B extends A {}

function f(a: A) {}

f(new A)
f(new B)
f({x: 1})

type State = {
  [key: string]: string
}

class StringDatabase {
  constructor(public state: State = {}) {}
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null
  }
  set(key: string, value: string): void {
    this.state[key] = value
  }
  static from(state: State) {
    let db = new StringDatabase
    for (let key in state) {
      db.set(key, state[key])
    }
    return db
  }
}

interface StringDatabase {
  state: State
  get(key: string): string | null
  set(key: string, value: string): void
}

interface StringDatabaseConstructor {
  new(state?: State): StringDatabase
  from(state: State): StringDatabase
}

class MyMap<K, V> {
  constructor(initialKey: K, initialValue: V) {

  }
  get(key: K): V {

  }
  set(key: K, value: V): void {

  }
  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {

  }
  static of<K, V>(k: K, v: V): MyMap<K, V> {

  }
}

interface MyMap<K, V> {
  get(key: K): V
  set(key: K, value: V): void
}

let a5 = new MyMap<string, number>('a', 1)
let b5 = new MyMap('b', 2)
a5.get('k')
b5.set('k', false)

type ClassConstructor<T> = new(...args: any[]) => T

function withEZDebug<C extends ClassConstructor<{getDebugValue(): object}>>(Class: C) {
  return class extends Class {
    debug() {
      let Name = this.constructor.name
      let value = this.getDebugValue()
      return Name + '(' + JSON.stringify(value) + ')'
    }
  }
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}
  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    }
  }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
user.debug()

function serializable<T extends ClassConstructor<{getValue(): Payload}>>(Constructor: T) {
  return class extends Constructor {
    serialize() {
      return this.getValue().toString()
    }
  }
}

@serializable
class APIPayload {
  getValue(): Payload {

  }
}

let payload = new APIPayload
let serialized = payload.serialize()

class MessageQueue {
  protected constructor(private messages: string[]) {}

  static create(messages: string[]) {
    return new MessageQueue(messages)
  }
}

class BadQueue extends MessageQueue {}

new MessageQueue({})

type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}

class RequestBuilder {
  private url: string | null = null
  private method: 'get' | 'post' | null = null
  private data: object | null = null

  setURL(url: string): this {
    this.url = url
    return this
  }

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setData(data: object): this {
    this.data = data
    return this
  }

  send() {

  }


} 

type ExistingUser = {
  id: number
  name: string
}

type NewUser = {
  name: string
}

function deleteUser(user: {id?: number, name: string}) {
  delete user.id
}

let existingUser: ExistingUser = {
  id: 123456,
  name: 'Ima User'
}

deleteUser(existingUser)

existingUser.id

type LegacyUser = {
  id?: number | string
  name: string
}

let legacyUser: LegacyUser = {
  id: '793331',
  name: 'Xin Yang'
}
deleteUser(legacyUser)

class Animal {}
class Bird extends Animal {
  chirp() {}
}
class Crow extends Bird {
  caw() {}
}


function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird
}
chirp(new Animal)
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {

}

function birdToBird(b: Bird): Bird {
  return b
}
clone(birdToBird)

function birdToCrow(b: Bird): Crow {
  return new Crow
}
clone(birdToCrow)

function birdToAnimal(b: Bird): Animal {
  return new Animal
}
clone(birdToAnimal)

function animalToBird(a: Animal): Bird {
  return new Bird
}
clone(animalToBird)

function crowToBird(c: Crow): Bird {
  return new Bird
}
clone(crowToBird)

function typeWidening() {
  let a = 'x'
  let b = 3
  var c = true
  const d = {x: 3}

  enum E {X, Y, Z}
  let e = E.X
  console.log(e);
}

function typeWidening2() {
  const a = 'x'
  const b = 3
  const c = true

  enum E {X, Y, Z}
  const e = E.X
  console.log(e); 
}

function typeWidening3() {
  let a: 'x' = 'x'
  let b: 3 = 3
  var c: true = true
  const d: {x: 3} = {x: 3}
}

function typeWidening4() {
  const a = 'x'
  let b = a
  console.log(b);
  
  const c: 'x' = 'x'
  let d = c
  console.log(d);
}

function typeWidening5() {
  let a = null
  a = 3
  a = 'b'
}

function typeWidening6() {
  let a = null
  a = 3
  a = 'b'
  return a
}
typeWidening6()

function constAssertion() {
  let a = {x: 3}
  let b: {x: 3}
  let c = {x: 3} as const

  let d = [1, {x: 2}]
  let e = [1, {x: 2}] as const
}

type Options = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}
class API {
  constructor (private options: Options) {}
}
new API({
  baseURL: 'https://api.mysite.com',
  tier: 'prod'
})
new API({
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
})
new API({
  baseURL: 'https://api.mysite.com',
  badTire: 'prod'
} as Options)
let badOptions = {
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
}
new API(badOptions)
let options: Options = {
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
}
new API(options)

type Unit = 'cm' | 'px' | '%'
let units: Unit[] = ['cm', 'px', '%']

function parseUnit(value: string): Unit | null {
  for (let i = 0; i < units.length; i++) {
    if (value.endsWith(units[i])) {
      return units[i]
    }
  }
  return null
}

type Width = {
  unit: Unit,
  value: number
}

function parseWidth(width: number | string | null | undefined): Width | null {
  if (width == null) {
    return null
  }

  if (typeof width === 'number') {
    return {unit: 'px', value: width}
  }

  let unit = parseUnit(width)
  if (unit) {
    return {unit, value: parseFloat(width)}
  }
  return null
}

type UserTextEvent = {type: 'TextEvent', value: string, target: HTMLInputElement}
type UserMouseEvent = {type: 'MouseEvent', value: [number, number], target: HTMLElement}

type UserEvent = UserTextEvent | UserMouseEvent

function handle(event: UserEvent) {
  if (event.type === 'TextEvent') {
    event.value
    event.target

    return
  }
  event.value
  event.target
}

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

function getNextDay(w: Weekday): Day {
  switch (w) {
    case 'Mon': return 'Tue'
    case 'Tue': return 'Wed'
    case 'Wed': return 'Thu'
    case 'Thu': return 'Fri'
  }
}

function isBig(n: number) {
  if (n >= 100) {
    return true
  }
}

type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}

type FriendList = APIResponse['user']['friendList']
type Friend = FriendList['friends'][number]

function getAPIResponse(): Promise<APIResponse> {
}

function renderFriendList(friendList: FriendList) {

}

let response = await getAPIResponse()
renderFriendList(response.user.friendList)

type ResponseKeys = keyof APIResponse
type UserKeys = keyof APIResponse['user']
type FriendListKeys = keyof APIResponse['user']['friendList']

function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
  return o[k]
}

type ActivityLog = {
  lastEvent: Date
  events: {
    id: string
    timestamp: Date
    type: 'Read' | 'Write'
  }[]
}

let activityLog: ActivityLog = {
  lastEvent: new Date,
  events: [
    {
      id: 'jefwie',
      timestamp: new Date,
      type: 'Read'
    }
  ]
}
let lastEvent = get(activityLog, 'lastEvent')

type Get = {
  <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1]
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(o: O, k1: K1, k2: K2): O[K1][K2]
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2]>(o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3]
}

let get2: Get = (object: any, ...keys: string[]) => {
  let result = object
  keys.forEach(k => result = result[k])
  return result
}

get2(activityLog, 'events', 0, 'type')
get2(activityLog, 'bad')

type Weekday2 = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day2 = Weekday | 'Sat' | 'Sun'

let nextDay2: Record<Weekday, Day> = {
  Mon: 'Tue'
}

let nextDay3: {[K in Weekday2]: Day2} = {
  Mon: 'Tue'
}

type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}

type OptionalAccount = {
  [K in keyof Account]?: Account[K]
}

type NullableAccount = {
  [K in keyof Account]: Account[K] | null
}

type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K]
}

type Account2 = {
  -readonly [K in keyof ReadonlyAccount]: Account[K]
}

 type Account3 = {
   [K in keyof OptionalAccount]-?: Account[K]
 }


import Currency from './Currency'

let amountDue: Currency = {
  unit: 'JPY',
  value: 83733.10
}

let otherAmountDue = Currency.from(330, 'EUR')

let aaa = [1, true]

function tuple<T extends unknown[]>(...ts: T): T {
  return ts
}

let aaaa = tuple(1, true)

function isString(a: unknown): a is string {
  return typeof a === 'string'
}

isString('a')
isString([7])

function parseInput(input: string | number) {
  let formattedInput: string
  if (isString(input)) {
    formattedInput = input.toUpperCase()
  }
}

type LegacyDialog = {}
type Dialog = {}

function isLegacyDialog(
  dialog: LegacyDialog | Dialog
): dialog is LegacyDialog {
  return typeof dialog !== undefined;
}

type IsString<T> = T extends string ? true : false

type AA = IsString<string>
type BB = IsString<number>

type ToArray<T> = T[]
type AAA = ToArray<number>
type BBB = ToArray<number | string>

type ToArray2<T> = T extends unknown ? T[] : T[]
type AAAA = ToArray2<number>
type BBBB = ToArray2<number | string | boolean>

type Without<T, U> = T extends U ? never : T

type AB = Without<
  boolean | number | string,
  boolean
>

type ElementType<T> = T extends unknown[] ? T[number] : T
type AAAAA = ElementType<number[]>

type ElementType2<T> = T extends (infer U)[] ? U : T
type BBBBB = ElementType2<number[]>

type ElementUgly<T, U> = T extends U[] ? U : T
type CCCCC = ElementUgly<number[]>

type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never
type F = typeof Array['prototype']['slice']
type G = SecondArg<F>

function builtInConditions() {
  type A = number | string
  type B = string
  type C = Exclude<A, B>

  type AA = number | string
  type BB = string
  type CC = Extract<A, B>

  type AAA = {a?: number | null}
  type BBB = NonNullable<AAA['a']>

  type F = (a: number) => string
  type R = ReturnType<F>

  type AAAA = {new(): BBBB}
  type BBBB = {b: number}
  type I = InstanceType<AAAA>
}

function formatInput(input: string) {}

function getUserInput(): string | number {
  if (true) return 'text'
}

let input = getUserInput()

formatInput(input as string)

formatInput(<string>input)

type VisibleDialog = {
  id: string
}
type DestroyedDialog = {}
type Dialog2 = VisibleDialog | DestroyedDialog

function closeDialog(dialog: Dialog2) {
  if (!('id' in dialog)) {
    return
  }
  setTimeout(() => removeFromDOM(
    dialog,
    document.getElementById(dialog.id)!
  ))
}

function removeFromDOM(dialog: VisibleDialog, element: Element) {
  element.parentNode!.removeChild(element)
}

let userId: string

userId.toUpperCase()

