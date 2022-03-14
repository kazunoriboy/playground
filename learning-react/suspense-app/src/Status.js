import React from "react";

const loadStatus = (function() {
  let error, response;
  const promise = new Promise(resolves =>
    setTimeout(resolves, 3000)
  )
    .then(() => (response = "success"))
    .catch(e => (error = e));
  return function() {
    if (error) throw error;
    if (response) return response;
    throw promise;
  };
})();

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
  const status = loadStatus();
  return <h1>status: {status}</h1>
}
