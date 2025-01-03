import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
