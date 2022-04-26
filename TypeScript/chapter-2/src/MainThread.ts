import { EventEmitter } from 'events'
import {SafeEmitter} from './WorkerScript'

let worker = new Worker('WorkerScript.js')
worker.postMessage('some data')
worker.onmessage = e => {
  console.log(e.data)
  
}

type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]

type Commands = {
  sendMessageToThread: [ThreadID, Message]
  createThread: [Participants]
  addUserToThread: [ThreadID, UserID]
  removeUserFromThread:  [ThreadID, UserID]
}

type Events = {
  receivedMessage: [ThreadID, UserID, Message]
  createdThread: [ThreadID, Participants]
  addedUserToThread: [ThreadID, UserID]
  removedUserFromThread: [ThreadID, UserID]
}

let commandEmitter: SafeEmitter<Commands> = new EventEmitter()
let eventEmitter: SafeEmitter<Events> = new EventEmitter()

worker.onmessage = event =>
  eventEmitter.emit(
    event.data.type,
    ...event.data.data
  )

commandEmitter.on('sendMessageToThread', data =>
  worker.postMessage({type: 'sendMessageToThread', data})
)
commandEmitter.on('createThread', data =>
  worker.postMessage({type: 'createThread', data})
)


eventEmitter.on('createdThread', (threadID, participants) =>
  console.log('Created a new chat thread!', threadID, participants)
)

commandEmitter.emit('createThread', [123, 456])

type Matrix = number[][]

type MatrixProtocol = {
  determinant: {
    in: [Matrix]
    out: number
  }
  'dot-product': {
    in: [Matrix, Matrix]
    out: Matrix
  }
  invert: {
    in: [Matrix]
    out: Matrix
  }
}

type Protocol = {
  [command: string]: {
    in: unknown[]
    out: unknown
  }
}

function createProtocol<P extends Protocol>(script: string) {
  return <K extends keyof P>(command: K) =>
    (...args: P[K]['in']) =>
      new Promise<P[K]['out']>((resolve, reject) => {
        let worker = new Worker(script)
        worker.onerror = reject
        worker.onmessage = event => resolve(event.data)
        worker.postMessage({command, args})
      })
}

let runWithMatrixProtocol = createProtocol<MatrixProtocol>(
  'MatrixWorkerScript.js'
)
let parallelDeterminant = runWithMatrixProtocol('determinant')

parallelDeterminant([[1, 2], [3, 4]])
  .then(determinant => console.log(determinant)
)

import {fork} from 'child_process'

let child = fork('./ChildThread.js')

child.on('message', data =>
  console.info('Child process sent a message', data)
)

child.send({type: 'syn', data: [3]})
