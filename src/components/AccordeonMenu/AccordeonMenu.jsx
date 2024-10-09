import { useState } from "react";
import "./AccordeonMenu.css";
import { QrCodeGenerator } from "../QrCodeGenerator.jsx/QrCodeGenerator";

export const AccordeonMenu = () => {
  const [showLayout, setShowLayout] = useState(false);

  const handleClick = () => {
    setShowLayout((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="accordeon" onClick={handleClick}>
        Click to open!
      </div>
      <div className={`dropmenu ${showLayout ? "open" : ""}`}>
        {<QrCodeGenerator></QrCodeGenerator>}
      </div>
    </div>
  );
};
