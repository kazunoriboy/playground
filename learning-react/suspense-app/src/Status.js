import React from "react";

const loadStatus = () => {
  console.log("load status");
  throw new Promise(resolves => setTimeout(resolves, 3000));
};

safe(loadStatus);

function safe(fn) {
  try {
    fn();
  } catch (error) {
    if (error instanceof Promise) {
      error.then(() => safe(fn));
    } else {
      throw error;
    }
  }
}

export default function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>
}
