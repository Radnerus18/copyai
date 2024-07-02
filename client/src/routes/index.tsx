import React, { lazy, FunctionComponent } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincomp from "../components/main";
import Login from "../components/login";
const Dashboard = lazy(() => import("../components/dashboard/dashboard"));
const Application = lazy(() => import("../components/application/application"));
const Assets = lazy(() => import("../components/assets"));
const PageNotfound = lazy(() => import("../components/page404"));
const pathConstants = {
  Dashboard: "/dashboard",
  Application: "/application",
  Assets: "assets",
  PageNotfound: "/404",
};

interface RouteConfiguration {
  path: string;
  element: React.ReactNode;
  children?: RouteConfiguration[];
}
const routes: RouteConfiguration[] = [
  {
    path: "/",
    element: <Maincomp />,
    children: [
      {
        path: pathConstants.Dashboard,
        element: <Dashboard />,
      },
      {
        path: pathConstants.Application,
        element: <Application />,
        children: [],
      },
      {
        path: pathConstants.Assets,
        element: <Assets />,
      },
      {
        path: pathConstants.PageNotfound,
        element: <PageNotfound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
const router = createBrowserRouter(routes);
const Routers: FunctionComponent = () => {
  return <RouterProvider router={router} />;
};
export default Routers;
