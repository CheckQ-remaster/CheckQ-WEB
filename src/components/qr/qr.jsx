import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { customAxios } from "../../lib/axios/customAxios";

const Qr = () => {
  const [qrData,setQrData] = useState('http://reactjs.test.org');

  useEffect(() => {
    const getQrData = async() =>{
      // await customAxios.get('/user/qr')
      //       .then(res => {
      //         console.log(res)
      //         setQrData(res.data)
      //       })
      //       .catch(error =>{
      //         console.log(error)
      //       });
    };

    setInterval(() => getQrData(), 15000);
  },[])
  return (
    <>
      <h2>큐알</h2>
      <QRCodeSVG  value={qrData}/>
    </>
  );
};

export default Qr;