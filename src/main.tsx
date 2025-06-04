import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import PeopleContainer from "./components/PeopleContainer";
import Page2 from "./components/Page2";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PeopleContainer/>,
  },
  {
    path: "/page2",
    element: <Page2/>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <RouterProvider router={router} />
);
