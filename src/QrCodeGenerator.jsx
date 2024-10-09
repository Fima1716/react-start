import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "../src/QrCodeGenerator.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("hello");
  const [result, setResult] = useState("");

  const onClickHandler = (event) => {
    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };
  console.log(result);

  return (
    <div>
      {result !== "" ? <QRCodeSVG value={result}></QRCodeSVG> : null}

      <input type="text" value={value} onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>
    </div>
  );
};
