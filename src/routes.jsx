import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
// import LightSidebarWithHeader from "./layout/LightSidebarWithHeader.jsx";

// const Home = lazy(() => import("./pages/home/home.jsx"));
// const About = lazy(() => import("./pages/home/about.jsx"));

const MainLayout = lazy(() => import('./layout/MainLayout'));
const Navlayout = lazy(() => import('./layout/Navlayout'));
const LightSidebarWithHeader = lazy(() => import('./layout/LightSidebarWithHeader'));
const DarkSidebarWithHeader = lazy(() => import('./layout/DarkSidebarWithHeader'));
const AdminLayout = lazy(() => import('./layout/AdminLayout'));

const Home = lazy(() => import('./pages/main/home.jsx'));
const About = lazy(() => import('./pages/main/about.jsx'));

const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Panel = lazy(() => import('./pages/admin/Panel'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Suspense fallback={<>...</>}>
          <Navlayout />
        </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
            <Suspense fallback={<>...</>}>
              <About />
            </Suspense>
        ),
      },
      // {
      //   path: 'contact',
      //   element: (
      //       <Suspense fallback={<>...</>}>
      //         <Contact />
      //       </Suspense>
      //   ),
      // },
    ],
  },
  {
    path: 'admin',
    element: (
        <Suspense fallback={<>...</>}>
          <LightSidebarWithHeader />
        </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
            <Suspense fallback={<>...</>}>
              <Dashboard />
            </Suspense>
        ),
      },
      {
        path: 'panel',
        element: (
            <Suspense fallback={<>...</>}>
              <Panel />
            </Suspense>
        ),
      },
    ],
  },
]);

