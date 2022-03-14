import React from "react";

const loadStatus = () => {
  throw new Error("something went wrong");
};

export default function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>
}
