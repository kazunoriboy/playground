import React from "react";

// const loadStatus = (function() {
//   let error, response;
//   const promise = new Promise(resolves =>
//     setTimeout(resolves, 3000)
//   )
//     .then(() => (response = "success"))
//     .catch(e => (error = e));
//   return function() {
//     if (error) throw error;
//     if (response) return response;
//     throw promise;
//   };
// })();

const threeSecondToGnar = new Promise(resolves => 
  setTimeout(() => resolves({ gnar: "gnarly!" }), 3000)
);

const resource = createResource(threeSecondToGnar);
// const result = resource.read();

function createResource(pendinig) {
  let error, response;
  pendinig.then(r => (response = r)).catch(e => (error = e));
  return {
    read() {
      if (error) throw error;
      if (response) return response;
      throw pendinig;
    }
  };
}

// safe(loadStatus);

// function safe(fn) {
//   try {
//     fn();
//   } catch (error) {
//     if (error instanceof Promise) {
//       error.then(() => safe(fn));
//     } else {
//       throw error;
//     }
//   }
// }

export default function Status() {
  const result = resource.read();
  return <h1>Gnar: {result.gnar}</h1>
}
