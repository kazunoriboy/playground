onmessage = e => {
  console.log(e.data)
  postMessage(`Ack: "${e.data}"`)
}
