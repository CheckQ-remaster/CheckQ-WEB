import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Container } from "./QrCode.style";

const QrCode = () => {
  const [alert, setalert] = useState(true);
  const [randnum, setRandnum] = useState(0);
  const [qrValue, setQrValue] = useState("");
  const [startDate, setstartDate] = useState("09월 01일 12시 30분");
  const [endDate, setendDate] = useState("09월 03일 12시 30분");
  const [time, setTime] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 10000000000);
      setRandnum(num);
      console.log(num);
    }, 10000);
  }, [randnum]);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);

      if (time == 0) {
        setTime(15);
      }
    }, 1000);
  });

  return (
    <Container>
      <QRCodeSVG value={`${randnum}`} size={303} />
      <div>
        <div className="qr_flex_end">
          <p>
            갱신까지<span>{time}</span>초
          </p>
        </div>
        <div className="qr_flex_start qr_text">입장 유효기간</div>
        <div className="qr_flex_start qr_date">{startDate} ~</div>
        <div className="qr_flex_start qr_date">{endDate} </div>
      </div>
    </Container>
  );
};

export default QrCode;
