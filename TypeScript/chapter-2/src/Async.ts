setTimeout(() => console.info('A'), 1)
setTimeout(() => console.info('B'), 2)
console.info('C')

import * as fs from 'fs'

fs.readFile(
  '/var/log/apache2/access_log',
  {encoding: 'utf-8'},
  (error, data) => {
    if (error) {
      console.error('error reading!', error)
      return
    }
    console.info('success reading!', data)
  }
)

fs.appendFile(
  'var/log/apache2/access_log',
  'New access log entry',
  error => {
    if (error) {
      console.error('error writing!', error)
    }
  }
)

function appendAndReadPromise(path: string, data: string): Promise<string> {
  return appendPromise(path, data)
    .then(() => readPromise(path))
    .catch(error => console.error(error))
}

type Executor<T> = (
  resolve: (result: T) => void,
  reject: (error: unknown) => void
) => void

class Promise<T> {
  constructor(f: Executor<T>) {}
  then<U>(g: (result: T) => Promise<U> | U): Promise<U>
  catch<U>(g: (error: unknown) => Promise<U> | U): Promise<U>
}

import {readFile} from 'fs'

function readFilePromise(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}
