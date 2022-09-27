import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Container } from "./QrCode.style";

const QrCode = () => {
  let [alert, setalert] = useState(true);
  let randnum;

  const makeRandomNum = () => {
    randnum = Math.floor(Math.random() * 10000000000);
    console.log(randnum);
  };
  const [qrValue, setQrValue] = useState(`${randnum}`);

  useEffect(() => {
    makeRandomNum();

    let a = setTimeout(() => {
      setalert(false);
    }, 2000);

    return () => {
      console.log(1);
      clearTimeout(a);
    };
  }, []);
  return (
    <Container>
      <QRCodeSVG value={qrValue} size={303} />
      <div>
        <div className="qr_flex_end">
          <p>
            갱신까지<span>15</span>초
          </p>
        </div>
        <div className="qr_flex_start qr_text">입장 유효기간</div>
        <div className="qr_flex_start qr_date">09월 01일 12시 30분 ~</div>
        <div className="qr_flex_start qr_date">09월 01일 12시 30분</div>
      </div>
    </Container>
  );
};

export default QrCode;
