import React, { useState, Suspense, lazy } from "react";
import Agreement from "./Agreement";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import GridLoader from "react-spinners/GridLoader";
import ErrorBoundary from "./ErrorBoundary";
import Status from "./Status";

function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  );
}

// const Main = lazy(() => import("./Main"));

// function App() {
//   const [agree, setAgree] = useState(false);

//   if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

//   return (
//     <ErrorBoundary>
//       <Suspense fallback={<ClimbingBoxLoader />}>
//         <Main />
//       </Suspense>
//     </ErrorBoundary>
//   );
// }

export default App;
