import axios from "axios";
import CONSTANT from "../utils";

const instance = axios.create({
  baseURL: CONSTANT.REACT_APP_BE_URL,
  timeout: 10000,
});

export default instance;
