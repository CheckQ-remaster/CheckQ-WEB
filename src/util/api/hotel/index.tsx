import instanse from "../../axios";

export const getHotels = async() => {
  try{
    return await instanse.get('');
  }catch (err) {
    throw err;
  }
};