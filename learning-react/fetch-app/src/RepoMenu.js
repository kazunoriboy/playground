import React, { useEffect } from "react";
import { useIterator } from "./hooks";

export function RepoMenu({
  repositories,
}) {
  const [{ name }, previous, next] = useIterator(repositories);


  return (
    <div style={{ display: "flex" }}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
}
