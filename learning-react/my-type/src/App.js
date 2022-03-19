import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "about",
      element: <About />,
      children: [
        {
          path: "servies",
          element: <Services />,
        },
        { path: "history", element: <History /> },
        { path: "location", element: <Location /> },
      ],
    },
    { path: "events", element: <Events /> },
    { path: "products ", element: <Products /> },
    { path: "contact", element: <Contact /> },
    { path: "*", element: <Whoops404 /> },
    { path: "services", element: <Navigate to="/about/services" /> },
  ]);
  return element;
}
