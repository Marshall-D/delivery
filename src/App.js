import "./App.css";
import Formatter from "./components/Formatter";
import TrackingResult from "./components/TrackingResult";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Formatter />,
  },
  {
    path: "/tracking",
    element: <TrackingResult />,
  },
]);

function App() {
  return (
    <>
      {/* <Formatter /> */}
      {/* <TrackingResult /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
