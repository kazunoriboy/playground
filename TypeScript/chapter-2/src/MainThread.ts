let worker = new Worker('WorkerScript.js')
worker.postMessage('some data')
worker.onmessage = e => {
  console.log(e.data)
  
}
