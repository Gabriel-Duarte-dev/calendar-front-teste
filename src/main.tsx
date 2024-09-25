import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryCliente } from "./services/queryClients.ts";
import Router from "./router.tsx";

import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliente}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENTKEY}>
        <Router />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
