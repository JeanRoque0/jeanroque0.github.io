import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode, isPreview }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const siteUrl =
    env.VITE_SITE_URL || "https://jeanroque0.github.io/";
  return {
    plugins: [react()],
    base:
      command === "serve" && !isPreview
        ? "/"
        : new URL(siteUrl).pathname.replace(/\/?$/, "/"),
    build: { assetsInlineLimit: 0 },
  };
});
