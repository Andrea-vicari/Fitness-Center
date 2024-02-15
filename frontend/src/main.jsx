import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { AuthContextProvider } from './context/AuthContext.jsx';
import Root from "./routes/root";
import ErrorPage from "./errorpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthContextProvider>
         <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);