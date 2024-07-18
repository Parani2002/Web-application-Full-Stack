import React from "react";
import router from "./router.jsx";
import ReactDOM from "react-dom";

import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./contexts/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
