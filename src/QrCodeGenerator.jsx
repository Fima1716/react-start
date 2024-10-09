import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "../src/QrCodeGenerator.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("hello");
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
        placeholder="Введите текст..."
        value={value}
        onChange={onChangeHandler}
      />
      <button type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>
      {result !== "" ? <QRCodeSVG size={200} value={result}></QRCodeSVG> : null}
    </div>
  );
};
