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
import AddRoom from "./addRoom/AddRoom";


interface Inputs {
  hotel_name: string,
  address: string,
  checkIn: string,
  checkOut: string,
  phone_number: number,
  hotel_image: string,
  
  room_name: string,
  price: number,
  people_number: number,
  room_image: string
}

const MyHotel = () => {
  const [imgPreview, setImgPreview] = useState("");
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const hotel_image = watch("hotel_image");
  
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  
  useEffect(() => {
    if (hotel_image && hotel_image.length > 0) {
      const file: any = hotel_image[0];
      setImgPreview(URL.createObjectURL(file));
    }
  }, [hotel_image]);

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
              {...register('checkIn', {
              })} />
          </SInputWrapper>
          <SInputWrapper>
            <label>체크아웃</label>
            <input 
              type="text" 
              {...register('checkOut', {
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
            {...register('hotel_image', {
              required: true
            })} />
        </ImgInputWrap>
        <AddRoom register={register} watch={watch}/>
        <Btn type="submit">저장</Btn>
      </form>
    </Container>
  );
};

export default MyHotel;