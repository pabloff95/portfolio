import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  server: {
    port: 4200,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:4200",
  },
});
