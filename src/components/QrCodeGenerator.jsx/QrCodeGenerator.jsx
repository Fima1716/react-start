import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./QrCodeGenerator.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };
  console.log("result:", result);

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        value={value}
        onChange={onChangeHandler}
      />
      <button type="button" onClick={onClickHandler}>
        Generate QR
      </button>
      {result !== "" ? <QRCodeSVG size={200} value={result}></QRCodeSVG> : null}
    </div>
  );
};
