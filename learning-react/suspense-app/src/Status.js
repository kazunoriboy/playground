import React from "react";

const loadStatus = () => "success - ready";

export default function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>
}
