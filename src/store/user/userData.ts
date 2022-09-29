import { selector } from "recoil";
import instance from "util/axios";

export const userData = selector({
  key: "userData",
  get: async() => instance.get('/getuser').then((res) => res.data)
})