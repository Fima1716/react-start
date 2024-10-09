import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./Layout";
import { AccordeonMenu } from "./components/AccordeonMenu/AccordeonMenu";

console.log(Layout);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccordeonMenu></AccordeonMenu>
  </StrictMode>
);
