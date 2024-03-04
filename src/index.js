import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import NoMatch from "./pages/NoMatch/NoMatch";

const router = createBrowserRouter([
  {
    path: "/kebabo-react-app/",
    element: <App />,
    children: [
      {
        path: "/kebabo-react-app/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
