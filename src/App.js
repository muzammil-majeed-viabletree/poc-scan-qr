import { Modal } from "antd";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Scanner } from "@yudiel/react-qr-scanner";

const App = (props) => {
  const [data, setData] = useState("No result");
  const [showQrScan, setShowQrScan] = useState(false);
  const [showBarScan, setShowBarScan] = useState(false);

  const handleOpenQr = () => {
    setShowQrScan(true);
    setShowBarScan(false);
  };

  const handleOpenBr = () => {
    setShowQrScan(false);
    setShowBarScan(true);
  };

  return (
    <>
      <div style={{ height: "40vh", width: "70vh" }}>
        <Scanner
          onResult={(text, result) => {
            setData(text);
            console.log(text, result);
          }}
          onError={(error) => console.log(error?.message)}
        />
      </div>

      <p style={{ marginTop: "45vh" }}>RESULT: {data}</p>
    </>
  );
};

export default App;
