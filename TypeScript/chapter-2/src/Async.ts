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
