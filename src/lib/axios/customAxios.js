import axios from "axios";

export const customAxios = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Authorization": `Bearer ${localStorage.getItem()}`,
  },
})