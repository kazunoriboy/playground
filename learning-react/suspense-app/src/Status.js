import React from "react";

const loadStatus = () => {
  throw new Promise(resolves => null);
};

export default function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>
}
