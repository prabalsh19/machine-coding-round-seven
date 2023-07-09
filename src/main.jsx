import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Country } from "./Pages/Country/Country.jsx";
import { Citi } from "./Pages/Citi/Citi.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "country/:id", element: <Country /> },
  { path: "cities/:id", element: <Citi /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
