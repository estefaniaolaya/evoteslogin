import axios from "axios";
import { API_URL } from "../config";

const instance = axios.create({
  //baseURL: API_URL,
  baseURL: 'http://localhost:3000/api' ,
  withCredentials: true,
});

export default instance;
