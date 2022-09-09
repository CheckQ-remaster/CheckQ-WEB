import instance from "../../axios";

export const signup = async (body: any) => {
  await instance.post('/signup',body);
};