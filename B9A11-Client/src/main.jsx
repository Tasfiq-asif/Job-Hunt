import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./Provider/ThemeProvider/ThemeProvider.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
