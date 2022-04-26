onmessage = e => {
  console.log(e.data)
  postMessage(`Ack: "${e.data}"`)
}

type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]

type Command = 
  | {type: 'sendMessageToThread', data: [ThreadID, Message]}
  | {type: 'createThread', data: [Participants]}
  | {type: 'addUserToThread', data: [ThreadID, UserID]}
  | {type: 'removeUserFromThread', data: [ThreadID, UserID]}

onmessage = e => 
  processCommandFromMainThread(e.data)

function processCommandFromMainThread(
  command: Command
) {
  switch (command.type) {
    case 'sendMessageToThread':
      let [threadID, message] = command.data
      console.log(message);
      
  }
}

import { EventEmitter } from "events"

export interface SafeEmitter<
  Events extends Record<PropertyKey, unknown[]>
> {
  emit<K extends keyof Events>(
    channel: K,
    ...data: Events[K]
  ): boolean
  on<K extends keyof Events>(
    channel: K,
    listener: (...data: unknown[]) => void
  ): this
}

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

onmessage = command =>
  commandEmitter.emit(
    command.data.type,
    ...command.data.data
  )

eventEmitter.on('receivedMessage', data =>
  postMessage({type: 'receivedMessage', data})
)
eventEmitter.on('createdThread', data =>
  postMessage({type: 'createdThread', data})
)

commandEmitter.on('sendMessageToThread', (threadID, Message) =>
  console.log(`OK, I will send a message to thread ID ${threadID}`)
)

eventEmitter.emit('createdThread', 123, [456, 789])
