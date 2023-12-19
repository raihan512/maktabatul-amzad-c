import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthProviders from "./Providers/AuthProviders";
import CartProvider from "./Providers/CartProviders";
import ThemeProvider from "./Providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProviders>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProviders>
    </ThemeProvider>
  </React.StrictMode>
);
