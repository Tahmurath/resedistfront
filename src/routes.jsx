import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const Home = lazy(() => import("./pages/home/home.jsx"));
const About = lazy(() => import("./pages/home/about.jsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
