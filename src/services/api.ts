import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_ENDPOINT,
  headers: {
    "Cross-Origin-Embedder-Policy": "unsafe-none",
  },
});

export { api };
