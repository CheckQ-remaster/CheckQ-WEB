import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Btn, InputWrapper } from "styles/them.style";
import { 
  Container, 
  SInputWrapper, 
  SmallBox, 
  ImgInputWrap 
} from "./MyHotel.style";

import UploadImage from "assets/image/MyHotel/uploadImage.png";


interface Inputs {
  hotel_name: string,
  address: string,
  phone_number: number,
  image: string
}

const MyHotel = () => {
  const [imgPreview, setImgPreview] = useState("");
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const image = watch("image");
  
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImgPreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label>호텔명</label>
          <input 
            type="text" 
            {...register('hotel_name', {
              required: true
            })} />
        </InputWrapper>
        <InputWrapper>
          <label>주소</label>
          <input 
            type="text" 
            {...register('address', {
              required: true
            })} />
        </InputWrapper>
        <SmallBox>
          <SInputWrapper>
            <label>체크인</label>
            <input 
              type="text" 
              {...register('hotel_name', {
                required: true
              })} />
          </SInputWrapper>
          <SInputWrapper>
            <label>체크아웃</label>
            <input 
              type="text" 
              {...register('hotel_name', {
                required: true
              })} />
          </SInputWrapper>
        </SmallBox>
        <InputWrapper>
          <label>전화번호</label>
          <input 
            type="text" 
            {...register('phone_number', {
              required: true
            })} />
        </InputWrapper>
        <ImgInputWrap>
          <label htmlFor="file_input">
            <img src={imgPreview || UploadImage} alt="호텔 사진"/>
          </label>
          <input 
            id="file_input" 
            type="file" 
            {...register('image', {
              required: true
            })} />
        </ImgInputWrap>
        <Btn type="submit">저장</Btn>
      </form>
    </Container>
  );
};

export default MyHotel;