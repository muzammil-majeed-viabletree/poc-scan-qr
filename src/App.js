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
      <div style={{ height: "200px", width: "100%", border: "1px solid red" }}>
        <p style={{}}>RESULT: {data}</p>
        <Scanner
          onResult={(text, result) => {
            setData(text);
            console.log(text, result);
            // window?.postMessage(text);
            if (window.ReactNativeWebView) {
              // ensure window.ReactNativeWebView is there, otherwise, web app might crash if is not there
              window.ReactNativeWebView.postMessage(text);
            }
          }}
          onError={(error) => console.log(error?.message)}
        />
      </div>

      {/* {JSON.stringify(window)} */}
    </>
  );
};

export default App;
