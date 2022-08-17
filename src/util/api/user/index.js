import instance from "../../axios";

export const signup = async (body) => {
  await instance.post('/signup',body);
};