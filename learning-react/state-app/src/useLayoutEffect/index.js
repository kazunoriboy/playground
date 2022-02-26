import React, { useEffect, useLayoutEffect } from "react";

export function App() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));
  return <div>ready</div>
}
