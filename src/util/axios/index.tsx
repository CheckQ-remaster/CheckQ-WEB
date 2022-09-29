import axios from "axios";

const instance = axios.create({
  baseURL: 'http://10.80.162.83:8080/',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
});

export default instance;