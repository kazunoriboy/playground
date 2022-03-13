import React, { useState } from "react";
import Agreement from "./Agreement";
import Main from "./Main";

function App() {
  const [agree, setAgree] = useState(false);
  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return <Main />;
}

export default App;
