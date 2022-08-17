import instanse from "../../../util/axios";

export const getHotels = async(setHotels) => {
  await instanse.get('')
  .then((res) => {
    setHotels(res.data);
  }).catch((error) => {
    console.log(error);
  });
};