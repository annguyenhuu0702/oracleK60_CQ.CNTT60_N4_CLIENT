import axios from "axios";
import { URL_API } from "../constants";

const instance = axios.create({
  baseURL: URL_API,
  withCredentials: true,
});

export default instance;
