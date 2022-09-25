import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";
import { Container } from "./QrCode.style";

const QrCode = () => {
  const [qrValue, setQrValue] = useState('http://reactjs.test.org');

  return (
    <Container>
      <QRCodeSVG 
        value={qrValue}
        size={303}
      />
      <div>
        <div className="qr_flex_end">
          <p>
            갱신까지<span>15</span>초
          </p>
        </div>
        <div className="qr_flex_start qr_text">
          유효기간
        </div>
        <div className="qr_flex_start qr_date">
          09월 01일 12시 30분 ~
        </div>
        <div className="qr_flex_start qr_date">
          09월 01일 12시 30분
        </div>
      </div>
    </Container>
  );
};

export default QrCode;
