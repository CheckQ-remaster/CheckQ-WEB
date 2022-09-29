import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Container } from "./QrCode.style";
import { instance } from "util/axios";

const QrCode = () => {
  const [alert, setalert] = useState(true);
  const [qrValue, setQrValue] = useState("");
  const [startDate, setstartDate] = useState("09월 01일 12시 30분");
  const [endDate, setendDate] = useState("09월 03일 12시 30분");
  const [time, setTime] = useState(15);

  const getQrCode = async() => {
    await instance.get(`/barcord?id=${localStorage.getItem('user_id')}`)
    .then((res) => {
      console.log(res)
      setQrValue(res.data.qr);
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    setTimeout(() => {
      getQrCode();
    }, 15000);
  }, [qrValue]);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);

      if (time === 0) {
        setTime(15);
      }
    }, 1000);
  }, [time]);

  useEffect(() => {
    getQrCode();
  }, []);

  return (
    <Container>
      <QRCodeSVG value={qrValue} size={303} />
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
