import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./Layout";
import { QrCodeGenerator } from "./QrCodeGenerator";

console.log(Layout);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout></Layout>
    <QrCodeGenerator></QrCodeGenerator>
  </StrictMode>
);
